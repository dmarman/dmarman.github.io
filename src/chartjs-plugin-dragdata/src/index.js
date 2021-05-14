import Chart from 'chart.js'
import {drag} from 'd3-drag'
import {select, event} from 'd3-selection'

let element, scale, scaleX, type, stacked, initValue, curDatasetIndex, curIndex

function getElement(chartInstance, callback) {
  return () => {
    if (event) {
      const e = event.sourceEvent
      element = chartInstance.getElementAtEvent(e)[0]
      type = chartInstance.config.type
      let scaleName = type === 'radar' ? '_scale' : '_yScale'
      if (element) {
        if (chartInstance.data.datasets[element._datasetIndex].dragData === false || element[scaleName].options.dragData === false) {
          element = null
          return
        }

        scale = element[scaleName].id
        if (element._xScale) {
          scaleX = element._xScale.id
        }

        if (type === 'bar' || type === 'horizontalBar') {
          stacked = chartInstance.config.options.scales.xAxes[0].stacked
          let data = {}
          let datasetIndex = element._datasetIndex
          let index = element._index
          let newPos = calcPosition(e, chartInstance, datasetIndex, index, data)
          let curValue = chartInstance.data.datasets[datasetIndex].data[index]
          initValue = newPos - curValue
        }

        if (typeof callback === 'function' && element) {
          if (callback(e, element) === false) {
            element = null
          }
        }
      }
    }
  }
}

function roundValue(value, pos) {
  if (!isNaN(pos)) {
    return Math.round(value * Math.pow(10, pos)) / Math.pow(10, pos)
  }
  return value
}

function calcRadar(e, chartInstance) {
  let x, y, v
  if (e.touches) {
    x = e.touches[0].clientX - chartInstance.canvas.getBoundingClientRect().left
    y = e.touches[0].clientY - chartInstance.canvas.getBoundingClientRect().top
  } else {
    x = e.clientX - chartInstance.canvas.getBoundingClientRect().left
    y = e.clientY - chartInstance.canvas.getBoundingClientRect().top
  }
  let rScale = chartInstance.scales[scale]
  let d = Math.sqrt(Math.pow(x - rScale.xCenter, 2) + Math.pow(y - rScale.yCenter, 2))
  let scalingFactor = rScale.drawingArea / (rScale.max - rScale.min)
  if (rScale.options.ticks.reverse) {
    v = rScale.max - (d / scalingFactor)
  } else {
    v = rScale.min + (d / scalingFactor)
  }

  v = roundValue(v, chartInstance.options.dragDataRound)

  v = v > chartInstance.scale.max ? chartInstance.scale.max : v
  v = v < chartInstance.scale.min ? chartInstance.scale.min : v

  return v
}

let lasts = [];
function calcPosition(e, chartInstance, datasetIndex, index, data) {
  let x, y;
  if (e.touches) {
    x = chartInstance.scales[scaleX].getValueForPixel(e.touches[0].clientX - chartInstance.canvas.getBoundingClientRect().left)
    y = chartInstance.scales[scale].getValueForPixel(e.touches[0].clientY - chartInstance.canvas.getBoundingClientRect().top)
  } else {
    x = chartInstance.scales[scaleX].getValueForPixel(e.clientX - chartInstance.canvas.getBoundingClientRect().left)
    y = chartInstance.scales[scale].getValueForPixel(e.clientY - chartInstance.canvas.getBoundingClientRect().top)

    if(e.metaKey || e.altKey || e.ctrlKey){
      if(lasts[chartInstance.id] === undefined) lasts[chartInstance.id] = [];
      if(lasts[chartInstance.id][datasetIndex] === undefined) lasts[chartInstance.id][datasetIndex] = [];
      if(lasts[chartInstance.id][datasetIndex][index] === undefined) lasts[chartInstance.id][datasetIndex][index] = e.clientY;

      if(lasts[chartInstance.id][datasetIndex][index] !== undefined) y = data + (lasts[chartInstance.id][datasetIndex][index] - e.clientY)/15;
    }
    if(lasts[chartInstance.id] === undefined) lasts[chartInstance.id] = [];
    if(lasts[chartInstance.id][datasetIndex] === undefined) lasts[chartInstance.id][datasetIndex] = [];
    if(lasts[chartInstance.id][datasetIndex][index] === undefined) lasts[chartInstance.id][datasetIndex][index] = e.clientY;

    lasts[chartInstance.id][datasetIndex][index] = e.clientY;
  }

  x = roundValue(x, chartInstance.options.dragDataRound)
  //y = roundValue(y, chartInstance.options.dragDataRound)

  x = x > chartInstance.scales[scaleX].max ? chartInstance.scales[scaleX].max : x
  x = x < chartInstance.scales[scaleX].min ? chartInstance.scales[scaleX].min : x

  y = y > chartInstance.scales[scale].max ? chartInstance.scales[scale].max : y
  y = y < chartInstance.scales[scale].min ? chartInstance.scales[scale].min : y

  if (chartInstance.data.datasets[datasetIndex].data[index].x !== undefined && chartInstance.options.dragX) {
    data.x = x
  }

  if (chartInstance.data.datasets[datasetIndex].data[index].y !== undefined) {
    if (chartInstance.options.dragY !== false) {
      data.y = y
    }
    return data
  } else {
    if (type === 'horizontalBar') {
      return x
    } else {
      return y
    }
  }
}

function updateData(chartInstance, callback) {
  return () => {
    if (element && event) {
      const e = event.sourceEvent
      curDatasetIndex = element._datasetIndex
      curIndex = element._index

      let data = chartInstance.data.datasets[curDatasetIndex].data[curIndex]

      if (type === 'radar') {
        data = calcRadar(e, chartInstance)
      } else if (stacked) {
        let cursorPos = calcPosition(e, chartInstance, curDatasetIndex, curIndex, data)
        data = roundValue(cursorPos - initValue, chartInstance.options.dragDataRound)
      } else {
        data = calcPosition(e, chartInstance, curDatasetIndex, curIndex, data)
      }

      if (typeof callback === 'function') {
        if (callback(e, curDatasetIndex, curIndex, data) !== false) {
          chartInstance.data.datasets[curDatasetIndex].data[curIndex] = data
          chartInstance.update(0)
        }
      } else {
        chartInstance.data.datasets[curDatasetIndex].data[curIndex] = data
        chartInstance.update(0)
      }
    }
  }
}

// Update values to the nearest values
function applyMagnet(chartInstance, i, j) {
  const dragOptions = chartInstance.options.dragOptions
  if (dragOptions && dragOptions.magnet) {
    const magnet = dragOptions.magnet
    if (magnet.to && typeof magnet.to === 'function') {
      let data = chartInstance.data.datasets[i].data[j]
      data = magnet.to(data)
      chartInstance.data.datasets[i].data[j] = data
      chartInstance.update(0)
      return data
    }
  } else {
    return chartInstance.data.datasets[i].data[j]
  }
}

function dragEndCallback(chartInstance, callback) {
  return () => {
    curDatasetIndex, curIndex = undefined
    if (typeof callback === 'function' && element) {
      const e = event.sourceEvent
      const datasetIndex = element._datasetIndex
      const index = element._index
      let value = applyMagnet(chartInstance, datasetIndex, index)
      return callback(e, datasetIndex, index, value)
    }
  }
}

const ChartJSdragDataPlugin = {
  id: 'dragdata',
  afterInit: function (chartInstance) {
    if (chartInstance.options.dragData) {
      select(chartInstance.chart.canvas).call(
        drag().container(chartInstance.chart.canvas)
          .on('start', getElement(chartInstance, chartInstance.options.onDragStart))
          .on('drag', updateData(chartInstance, chartInstance.options.onDrag))
          .on('end', dragEndCallback(chartInstance, chartInstance.options.onDragEnd))
      )
    }
  },
  beforeRender: function (chart) {
    const dragOptions = chart.config.options.dragOptions
    if (dragOptions && dragOptions.showTooltip) {
      // create an array of tooltips
      // we can't use the chart tooltip because there is only one tooltip per chart
      chart.pluginTooltips = []
      chart.config.data.datasets.forEach(function (dataset, i) {
        chart.getDatasetMeta(i).data.forEach(function (sector, j) {
          if (curDatasetIndex === i && curIndex === j) {
            chart.pluginTooltips.push(new Chart.Tooltip({
              _chart: chart.chart,
              _chartInstance: chart,
              _data: chart.data,
              _options: chart.options.tooltips,
              _active: [sector]
            }, chart))
          }
        })
      })
            
      // turn off normal tooltips
      // chart.options.tooltips.enabled = false;
    }
  },
  afterDraw: function (chart, easing) {
    const dragOptions = chart.config.options.dragOptions
    if (dragOptions && dragOptions.showTooltip) {
      // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
      if (!chart.allTooltipsOnce) {
        if (easing !== 1)
          return
        chart.allTooltipsOnce = true
      }

      // turn on tooltips
      chart.options.tooltips.enabled = true
      Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
        // This line checks if the item is visible to display the tooltip
        if(!tooltip._active[0].hidden){
          tooltip.initialize()
          tooltip.update()
          // we don't actually need this since we are not animating tooltips
          tooltip.pivot()
          tooltip.transition(easing).draw()
        }
      })
      chart.options.tooltips.enabled = true
    }
  }
}

Chart.pluginService.register(ChartJSdragDataPlugin)

export default ChartJSdragDataPlugin
