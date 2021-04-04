import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
import rawShades from './models/shadesModel'
import rawNext from './models/nextModel'
import modelWrapper from './models/wrapper/wrapper'
import Mustache from 'mustache'
import codeStub from './stubs/code.stub.html'
import shadeStub from './stubs/shade.stub.html'
import namer from './color-namer'
import chroma from 'chroma-js'
import Chart from 'chart.js';
import 'chartjs-plugin-dragdata'
import 'chartjs-plugin-annotation'
import news from './datasets/news-revised';
import ClipboardJS from 'clipboard'

let nextModel = modelWrapper(rawNext);
let shadesModel = modelWrapper(rawShades);

function rgbToHex(r, g, b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const initColor = '#0963EF';

const pickrButton = Pickr.create({
  el: '.pickr',
  theme: 'nano', // or 'monolith', or 'nano'

  default: initColor,
  comparison: false,
  showAlways: true,
  container: '.pickr-ctrl',
  appClass: 'picker',
  useAsButton: true,
  components: {
    preview: true,
    opacity: false,
    hue: true,
    interaction: {
      input: true,
      save: false
    }
  },
  i18n: {
    'btn:save': 'Apply',
    'aria:btn:save': 'Apply',
  }
});

let options = {
  tooltips: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    callbacks: {
      label: function(tooltipItem, data) {
        return tooltipItem.yLabel.toFixed(1);

      },
      title: function(tooltipItem, data) {
        let name = palette[tooltipItem[0].datasetIndex].name;
        return name.charAt(0).toUpperCase() + name.slice(1) + ' ' + tooltipItem[0].label;
      }
    }
  },
  aspectRatio: 3,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  title: {
    display: true,
    position: 'left',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontColor: 'black',
    //fontSize: '12px'
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    }
  },
  dragData: true,
  dragDataRound: 1,
  dragOptions: {
    showTooltip: true
  },
  animation: {
    duration: 200
  },
  onDragEnd: function() {
    hideTooltip(luminosityCanva);
    hideTooltip(chromaCanva);
    hideTooltip(hueCanva);
    hideTooltip(contrastCanva);
    hideTooltip(contrastBlackCanva);
    hideTooltip(contrastWhiteCanva);
    setGradients(luminosityCanva);
    setGradients(chromaCanva);
    setGradients(hueCanva);
    setGradients(contrastCanva);
    setGradients(contrastWhiteCanva);
    setGradients(contrastBlackCanva);
    renderTexts();
  },
  hover: {
    onHover: function(e) {
      const point = this.getElementAtEvent(e);
      if (point.length) e.target.style.cursor = 'grab';
      else e.target.style.cursor = 'default';
      var item = this.getElementAtEvent(e);
      if(item.length) {
        document.querySelectorAll('.border-black').forEach(el => el.classList.remove('border-black'));

        let index = item[0]._index;
        if(index === 0) index = '0.5';
        let el = document.getElementById('output' + item[0]._datasetIndex + index);
        el.classList.add('border-black');

      } else {
        document.querySelectorAll('.border-black').forEach(el => el.classList.remove('border-black'));
      }
    },

  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        max: 100,
      }
    }],
    xAxes: [{
      ticks: {
        //fontSize: 10
      // autoSkip: false,
        //maxRotation: 45,
        //minRotation: 45
      }
    }],
    x: {
      display: true,
      scaleLabel: {
        display: true,
      }
    },
    y: {
      display: true,
      scaleLabel: {
        display: true,
      }
    }
  }
};

options.onDrag = (e, datasetIndex, index, value) => {
  e.target.style.cursor = 'grabbing';
  editLuminosity(datasetIndex, index, value);

  grayOutLines(luminosityCanva, datasetIndex);
  grayOutLines(chromaCanva, datasetIndex);
  grayOutLines(hueCanva, datasetIndex);
  grayOutLines(contrastCanva, datasetIndex);
  grayOutLines(contrastBlackCanva, datasetIndex);
  grayOutLines(contrastWhiteCanva, datasetIndex);
};
options.title.text = 'Luminosity';

let luminosityCanva = new Chart('luminosity-canva', {
  type: 'line',
  data: {
    datasets: [
      {
        data: [],
        fill: false,
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      }
    ],
    labels: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
  },
  options: options
});

options.onDrag = function(e, datasetIndex, index, value) {
  e.target.style.cursor = 'grabbing';
  editChroma(datasetIndex, index, value);
  grayOutLines(luminosityCanva, datasetIndex);
  grayOutLines(chromaCanva, datasetIndex);
  grayOutLines(hueCanva, datasetIndex);
  grayOutLines(contrastCanva, datasetIndex);
  grayOutLines(contrastBlackCanva, datasetIndex);
  grayOutLines(contrastWhiteCanva, datasetIndex);
};
options.scales.yAxes[0].ticks.max = 110;
options.title.text = 'Chroma';

let chromaCanva = new Chart('chroma-canva', {
  type: 'line',
  data: {
    datasets: [
      {
        data: [],
        fill: false,
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      }
    ],
    labels: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  options: options
});

options.onDrag = function(e, datasetIndex, index, value) {
  e.target.style.cursor = 'grabbing';
  editHue(datasetIndex, index, value, 'hue');
  grayOutLines(luminosityCanva, datasetIndex);
  grayOutLines(chromaCanva, datasetIndex);
  grayOutLines(hueCanva, datasetIndex);
  grayOutLines(contrastCanva, datasetIndex);
  grayOutLines(contrastBlackCanva, datasetIndex);
  grayOutLines(contrastWhiteCanva, datasetIndex);
};
options.scales.yAxes[0].ticks.max = 400;
options.title.text = 'Hue';
let hueCanva = new Chart('hue-canva', {
  type: 'line',
  data: {
    datasets: [
      {
        data: [],
        fill: false,
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      }
    ],
    labels: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  options: options
});

options.scales.yAxes[0].ticks.max = 2.6;
options.scales.yAxes[0].ticks.min = 1;
options.title.text = 'Contrast WCAG';
options.dragData = false;
options.tooltips.callbacks.label = function(tooltipItem, data) {return tooltipItem.yLabel.toFixed(2);};
options.annotation = {
  annotations: [{
    type: 'box',
    drawTime: 'beforeDatasetsDraw',
    yScaleID: 'y-axis-0',
    xScaleID: 'x-axis-0',
    yMin: 1,
    yMax: 1.4,
    xMin: 3,
    xMax: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },{
    type: 'box',
    drawTime: 'beforeDatasetsDraw',
    yScaleID: 'y-axis-0',
    xScaleID: 'x-axis-0',
    yMin: 1,
    yMax: 1.2,
    xMin: 8,
    xMax: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }]
};
let contrastCanva = new Chart('contrast-canva', {
  type: 'line',
  data: {
    datasets: [
      {
        data: [],
        fill: false,
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      }
    ],
    labels: ['White-50', '50-100', '100-200', '200-300', '300-400', '400-500', '500-600', '600-700', '700-800', '800-900', '900-Black']
  },
  options: options
});

options.scales.yAxes[0].ticks.max = 20;
options.scales.yAxes[0].ticks.min = 1;
options.title.text = 'Contrast WCAG over White';
options.annotation = {
  annotations: [{
    type: 'box',
    drawTime: 'beforeDatasetsDraw',
    yScaleID: 'y-axis-0',
    xScaleID: 'x-axis-0',
    yMin: 1,
    yMax: 3,
    xMin: 4,
    xMax: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }, {
    type: 'box',
    drawTime: 'beforeDatasetsDraw',
    yScaleID: 'y-axis-0',
    xScaleID: 'x-axis-0',
    yMin: 1,
    yMax: 4.3,
    xMin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }, {
    type: 'box',
    drawTime: 'beforeDatasetsDraw',
    yScaleID: 'y-axis-0',
    xScaleID: 'x-axis-0',
    yMin: 4.7,
    //yMax: 4.5,
    xMax: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }]
};
let contrastWhiteCanva = new Chart('contrast-white-canva', {
  type: 'line',
  data: {
    datasets: [
      {
        data: [],
        fill: false,
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      }
    ],
    labels: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  options: options
});

options.scales.yAxes[0].ticks.max = 20;
options.scales.yAxes[0].ticks.min = 1;
options.title.text = 'Contrast WCAG over Black';
options.annotation = {
  annotations: [{
    type: 'box',
    drawTime: 'beforeDatasetsDraw',
    yScaleID: 'y-axis-0',
    xScaleID: 'x-axis-0',
    yMin: 1,
    yMax: 4.5,
    xMax: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }]
};
let contrastBlackCanva = new Chart('contrast-black-canva', {
  type: 'line',
  data: {
    datasets: [
      {
        data: [],
        fill: false,
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      },
      {
        data: [],
        fill: false
      }
    ],
    labels: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  options: options
});

window.addEventListener('click', function(e){
  if (document.querySelector('.palette-grid').contains(e.target)
    || document.querySelector('.pickr-ctrl').contains(e.target)
    || document.getElementById('luminosity-canva').contains(e.target)
    || document.getElementById('chroma-canva').contains(e.target)
    || document.getElementById('hue-canva').contains(e.target)
    || document.getElementById('contrast-canva').contains(e.target)
    || document.getElementById('contrast-black-canva').contains(e.target)
    || document.getElementById('contrast-white-canva').contains(e.target)
  ){
    // Clicked in box
  } else{
    // Clicked outside the box
    showAllLines();
  }
});

document.querySelectorAll('.color-col').forEach((el, key) => {
  el.innerHTML = Mustache.render(shadeStub, {color: key});

  el.addEventListener('click', (e) => {
    showLine(e.target.id.substr(6, 1))
  })

  el.addEventListener('mouseover', (e) => {
    let hidden = hiddenDatasets(luminosityCanva.data.datasets);
    let dataset = parseInt(e.target.id.substr(6, 1));
    let index = parseInt(e.target.id.substr(7, 1));

    if(dataset && hidden.length === 9 && !hidden.includes(dataset)) {
      openTooltip(luminosityCanva, dataset, index)
      openTooltip(chromaCanva, dataset, index)
      openTooltip(hueCanva, dataset, index)
      openTooltip(contrastCanva, dataset, index)
      openTooltip(contrastBlackCanva, dataset, index)
      openTooltip(contrastWhiteCanva, dataset, index)
    }
  });

  el.addEventListener('mouseleave', (e) => {
    //let hidden = hiddenDatasets(luminosityCanva.data.datasets);
    //let target = parseInt(e.target.id.substr(6, 1));
    //if(target && hidden.length === 9 && !hidden.includes(target)) openTooltip(luminosityCanva, e.target.id.substr(6, 1), e.target.id.substr(7, 1))
    closeTooltip(luminosityCanva);
    closeTooltip(chromaCanva);
    closeTooltip(hueCanva);
    closeTooltip(contrastCanva);
    closeTooltip(contrastBlackCanva);
    closeTooltip(contrastWhiteCanva);
  });
});

function openTooltip(chart, index, test) {
  let mouseMoveEvent, meta, point, rectangle;

  meta = chart.getDatasetMeta(index);
  rectangle = chart.canvas.getBoundingClientRect();
  point = meta.data[test].getCenterPoint();

  mouseMoveEvent = new MouseEvent('mousemove', {
    clientX: rectangle.left + point.x,
    clientY: rectangle.top + point.y
  });

  chart.canvas.dispatchEvent(mouseMoveEvent);
}

function closeTooltip(chart) {
  let mouseOutEvent = new MouseEvent('mouseout');
  return chart.canvas.dispatchEvent(mouseOutEvent);
}

function hideTooltip(chart){
  chart.options.tooltips.enabled = false;
  chart.update();
}

function showLine(col) {
  col = parseInt(col);

  let hidden = hiddenDatasets(luminosityCanva.data.datasets);

  if(hidden.length === 0){
    luminosityCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = true;
      hideSelectedIndicator(key);

      if (key === col) {
        dataset.hidden = !dataset.hidden;
        toggleSelectedIndicator(key);
      }
    });
  } else if(hidden.length === 9 && !hidden.includes(col)){
    luminosityCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = false;
      showSelectedIndicator(key)
    });
  } else {
    luminosityCanva.data.datasets.forEach((dataset, key) => {
      if (key === col) {
        dataset.hidden = !dataset.hidden;
        toggleSelectedIndicator(key);
      }
    });
  }

  if(hidden.length === 0){
    chromaCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = true;
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  } else if(hidden.length === 9 && !hidden.includes(col)){
    chromaCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = false;
    });
  } else {
    chromaCanva.data.datasets.forEach((dataset, key) => {
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  }

  if(hidden.length === 0){
    hueCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = true;
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  } else if(hidden.length === 9 && !hidden.includes(col)){
    hueCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = false;
    });
  } else {
    hueCanva.data.datasets.forEach((dataset, key) => {
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  }

  if(hidden.length === 0){
    contrastCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = true;
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  } else if(hidden.length === 9 && !hidden.includes(col)){
    contrastCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = false;
    });
  } else {
    contrastCanva.data.datasets.forEach((dataset, key) => {
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  }

  if(hidden.length === 0){
    contrastBlackCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = true;
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  } else if(hidden.length === 9 && !hidden.includes(col)){
    contrastBlackCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = false;
    });
  } else {
    contrastBlackCanva.data.datasets.forEach((dataset, key) => {
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  }

  if(hidden.length === 0){
    contrastWhiteCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = true;
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  } else if(hidden.length === 9 && !hidden.includes(col)){
    contrastWhiteCanva.data.datasets.forEach((dataset, key) => {
      dataset.hidden = false;
    });
  } else {
    contrastWhiteCanva.data.datasets.forEach((dataset, key) => {
      if (key === col) dataset.hidden = !dataset.hidden;
    });
  }

  luminosityCanva.update();
  chromaCanva.update();
  hueCanva.update();
  contrastCanva.update();
  contrastBlackCanva.update();
  contrastWhiteCanva.update();
}

function showSelectedIndicator(color)
{
  document.getElementById('selected' + color).classList.remove('opacity-0')
}

function hideSelectedIndicator(color)
{
  document.getElementById('selected' + color).classList.add('opacity-0')
}

function toggleSelectedIndicator(color)
{
  document.getElementById('selected' + color).classList.toggle('opacity-0')
}

function hiddenDatasets(datasets)
{
  let hidden = [];
  datasets.forEach((dataset, key) => {
    if(dataset.hidden) hidden.push(key);
  });

  return hidden;
}

function showAllLines() {
  luminosityCanva.data.datasets.forEach((dataset, key) => {
    dataset.hidden = false;
    showSelectedIndicator(key)
  });
  chromaCanva.data.datasets.forEach((dataset, key) => {
    dataset.hidden = false;
  });
  hueCanva.data.datasets.forEach((dataset, key) => {
    dataset.hidden = false;
  });
  contrastCanva.data.datasets.forEach((dataset, key) => {
    dataset.hidden = false;
  });
  contrastWhiteCanva.data.datasets.forEach((dataset, key) => {
    dataset.hidden = false;
  });
  contrastBlackCanva.data.datasets.forEach((dataset, key) => {
    dataset.hidden = false;
  });

  luminosityCanva.update();
  chromaCanva.update();
  hueCanva.update();
  contrastCanva.update();
  contrastWhiteCanva.update();
  contrastBlackCanva.update();
}

let color0 = shadesModel(initColor);

let outputs = calculateColorsHorizontally(initColor, color0);

outputs = [];
let outputShades = [];
let i = 0;

//delete news.gray
//delete news.rose
//delete news.pink
//delete news.fuchsia
//delete news.purple

for (const colors in news) {
  if(i < 10) {
    outputShades[i] = {};
    for(const shade in news[colors]){
      outputShades[i]['r' + shade/100] = chroma.hex(news[colors][shade]).rgb()[0]/255;
      outputShades[i]['g' + shade/100] = chroma.hex(news[colors][shade]).rgb()[1]/255;
      outputShades[i]['b' + shade/100] = chroma.hex(news[colors][shade]).rgb()[2]/255;
    }
    i++;
  }
}

outputs = outputShades;

let brandColor = calculateBrandColor(initColor, outputs);
let palette = [];

normalizeToLCH(outputs);
paint(outputs);
renderTexts();
toCharts();

pickrButton.on('change', (color, instance) => {
  color0 = shadesModel(color.toHEXA().toString());

  outputs = calculateColorsHorizontally(color.toHEXA().toString(), color0);
  brandColor = calculateBrandColor(color.toHEXA().toString(), outputs);

  normalizeToLCH(outputs);

  toCharts();

  paint(outputs);
  changeFavicon(color.toHEXA().toString())

  if(instance.changeSource === 'input'){
    renderTexts();
  }
});

pickrButton.on('changestop', (color, instance) => {
  renderTexts();
});

function calculateColorsHorizontally(initColor, color0)
{
  let next = nextModel(initColor);
  let color1 = shadesModel(rgbToHex(next.r1*255, next.g1*255,next.b1*255));
  let color2 = shadesModel(rgbToHex(next.r2*255, next.g2*255,next.b2*255));
  let color3 = shadesModel(rgbToHex(next.r3*255, next.g3*255,next.b3*255));
  let color4 = shadesModel(rgbToHex(next.r4*255, next.g4*255,next.b4*255));
  let color5 = shadesModel(rgbToHex(next.r5*255, next.g5*255,next.b5*255));
  let color6 = shadesModel(rgbToHex(next.r6*255, next.g6*255,next.b6*255));
  let color7 = shadesModel(rgbToHex(next.r7*255, next.g7*255,next.b7*255));
  let color8 = shadesModel(rgbToHex(next.r8*255, next.g8*255,next.b8*255));
  let color9 = shadesModel(rgbToHex(next.r9*255, next.g9*255,next.b9*255));

  return [color0, color1, color2, color3, color4, color5, color6, color7, color8, color9];
}

function calculateBrandColor(hex, outputs)
{
  let distances = {};

  for(let i = 0; i < 10; i++){
    let j = 0;
    i === 0 ? j = 0.5 : j = i;
    distances['0' + j] = chroma.deltaE(rgbToHex(outputs[0]['r' + j]*255, outputs[0]['g' + j]*255, outputs[0]['b' + j]*255), hex);
    distances['1' + j] = chroma.deltaE(rgbToHex(outputs[1]['r' + j]*255, outputs[1]['g' + j]*255, outputs[1]['b' + j]*255), hex);
    distances['2' + j] = chroma.deltaE(rgbToHex(outputs[2]['r' + j]*255, outputs[2]['g' + j]*255, outputs[2]['b' + j]*255), hex);
    distances['3' + j] = chroma.deltaE(rgbToHex(outputs[3]['r' + j]*255, outputs[3]['g' + j]*255, outputs[3]['b' + j]*255), hex);
    distances['7' + j] = chroma.deltaE(rgbToHex(outputs[7]['r' + j]*255, outputs[7]['g' + j]*255, outputs[7]['b' + j]*255), hex);
    distances['8' + j] = chroma.deltaE(rgbToHex(outputs[8]['r' + j]*255, outputs[8]['g' + j]*255, outputs[8]['b' + j]*255), hex);
    distances['9' + j] = chroma.deltaE(rgbToHex(outputs[9]['r' + j]*255, outputs[9]['g' + j]*255, outputs[9]['b' + j]*255), hex);
  }
  let sortable = [];
  for (let distance in distances) {
    sortable.push([distance, distances[distance]]);
  }

  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });

  let index = sortable[0][0].slice(1);
  let colorIndex = sortable[0][0].slice(0, 1);

  brandColor = { index, color: colorIndex, fit: false, similar: [], hex: hex, distance: sortable[0][1]};

  sortable.forEach((match) => {
    if(match[0].slice(0, 1) === colorIndex) brandColor.similar.push(match)
  });

  let replace = chroma(hex).rgb();

  if(sortable[0][1] < 9.5){ // 9.5 will fit 79% of the colors

    brandColor.fit = true;

    if(colorIndex === '0'){
      outputs[0]['r' + index] = replace[0]/255;
      outputs[0]['g' + index] = replace[1]/255;
      outputs[0]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '1'){
      outputs[1]['r' + index] = replace[0]/255;
      outputs[1]['g' + index] = replace[1]/255;
      outputs[1]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '2'){
      outputs[2]['r' + index] = replace[0]/255;
      outputs[2]['g' + index] = replace[1]/255;
      outputs[2]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '3'){
      outputs[3]['r' + index] = replace[0]/255;
      outputs[3]['g' + index] = replace[1]/255;
      outputs[3]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '7'){
      outputs[7]['r' + index] = replace[0]/255;
      outputs[7]['g' + index] = replace[1]/255;
      outputs[7]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '8'){
      outputs[8]['r' + index] = replace[0]/255;
      outputs[8]['g' + index] = replace[1]/255;
      outputs[8]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '9'){
      outputs[9]['r' + index] = replace[0]/255;
      outputs[9]['g' + index] = replace[1]/255;
      outputs[9]['b' + index] = replace[2]/255;
    }
  }

  return brandColor;
}

function renderTexts()
{
  let names = name(outputs);

  displayHex();

  if(brandColor.fit){
    document.getElementById('brand').innerHTML = '.bg-' + names[brandColor.color] + '-' + brandColor.index*100;
    document.getElementById('fit').classList.add('hidden');
  } else {
    document.getElementById('brand').innerHTML = '.bg-brand';
    document.getElementById('fit').classList.remove('hidden');

    let leftFit = '.bg-' + names[brandColor.similar[0][0].slice(0, 1)] + '-' + brandColor.similar[0][0].slice(1)*100;
    let rightFit = '.bg-' + names[brandColor.similar[1][0].slice(0, 1)] + '-' + brandColor.similar[1][0].slice(1)*100;

    document.getElementById('fits-between').innerHTML = leftFit + ' and ' + rightFit;
  }

  code(names, brandColor.hex);
}

function code(names)
{
  let colors = [];

  names.forEach((name, key) => {
    colors.push({
      name: name,
      '50':  chroma.lch(palette[key][0][0], palette[key][0][1], palette[key][0][2]).hex(),
      '100': chroma.lch(palette[key][1][0], palette[key][1][1], palette[key][1][2]).hex(),
      '200': chroma.lch(palette[key][2][0], palette[key][2][1], palette[key][2][2]).hex(),
      '300': chroma.lch(palette[key][3][0], palette[key][3][1], palette[key][3][2]).hex(),
      '400': chroma.lch(palette[key][4][0], palette[key][4][1], palette[key][4][2]).hex(),
      '500': chroma.lch(palette[key][5][0], palette[key][5][1], palette[key][5][2]).hex(),
      '600': chroma.lch(palette[key][6][0], palette[key][6][1], palette[key][6][2]).hex(),
      '700': chroma.lch(palette[key][7][0], palette[key][7][1], palette[key][7][2]).hex(),
      '800': chroma.lch(palette[key][8][0], palette[key][8][1], palette[key][8][2]).hex(),
      '900': chroma.lch(palette[key][9][0], palette[key][9][1], palette[key][9][2]).hex()
    });
  });

  let renderedCode = Mustache.render(codeStub, {colors, brandColor, unfit: !brandColor.fit});
  document.querySelector('.code').innerHTML = renderedCode;
}

function paint(outputs)
{
  outputs.forEach((output, i) => {
    document.getElementById('output' + i + '0.5').style.backgroundColor = 'rgb(' + output['r0.5']*255 + ',' + output['g0.5']*255 + ',' + output['b0.5']*255 + ')';
    document.getElementById('output' + i + '1').style.backgroundColor = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
    document.getElementById('output' + i + '2').style.backgroundColor = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
    document.getElementById('output' + i + '3').style.backgroundColor = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
    document.getElementById('output' + i + '4').style.backgroundColor = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
    document.getElementById('output' + i + '5').style.backgroundColor = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
    document.getElementById('output' + i + '6').style.backgroundColor = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
    document.getElementById('output' + i + '7').style.backgroundColor = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
    document.getElementById('output' + i + '8').style.backgroundColor = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
    document.getElementById('output' + i + '9').style.backgroundColor = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';
  });

  document.getElementById('title10').style.color = 'rgb(' + outputs[0].r7*255 + ',' + outputs[0].g7*255 + ',' + outputs[0].b7*255 + ')';
  document.getElementById('title9').style.color = 'rgb(' + outputs[0].r8*255 + ',' + outputs[0].g8*255 + ',' + outputs[0].b8*255 + ')';
  document.getElementById('title8').style.color = 'rgb(' + outputs[0].r9*255 + ',' + outputs[0].g9*255 + ',' + outputs[0].b9*255 + ')';
  document.getElementById('title7').style.color = 'rgb(' + outputs[0].r2*255 + ',' + outputs[0].g2*255 + ',' + outputs[0].b2*255 + ')';
  document.getElementById('title6').style.color = 'rgb(' + outputs[0].r3*255 + ',' + outputs[0].g3*255 + ',' + outputs[0].b3*255 + ')';
  document.getElementById('title5').style.color = 'rgb(' + outputs[0].r4*255 + ',' + outputs[0].g4*255 + ',' + outputs[0].b4*255 + ')';
  document.getElementById('title4').style.color = 'rgb(' + outputs[0].r5*255 + ',' + outputs[0].g5*255 + ',' + outputs[0].b5*255 + ')';
  document.getElementById('title3').style.color = 'rgb(' + outputs[0].r6*255 + ',' + outputs[0].g6*255 + ',' + outputs[0].b6*255 + ')';
  document.getElementById('title2').style.color = 'rgb(' + outputs[0].r7*255 + ',' + outputs[0].g7*255 + ',' + outputs[0].b7*255 + ')';
  document.getElementById('title1').style.color = 'rgb(' + outputs[0].r8*255 + ',' + outputs[0].g8*255 + ',' + outputs[0].b8*255 + ')';
  document.getElementById('title0').style.color = 'rgb(' + outputs[0].r9*255 + ',' + outputs[0].g9*255 + ',' + outputs[0].b9*255 + ')';

}

function displayHex()
{
  palette.forEach((color, i) => {
    document.getElementById('hex' + i + '0.5').innerHTML = chroma(color[0][0], color[0][1], color[0][2]);
    document.getElementById('hex' + i + '1').innerHTML =   chroma(color[1][0], color[1][1], color[1][2]);
    document.getElementById('hex' + i + '2').innerHTML =   chroma(color[2][0], color[2][1], color[2][2]);
    document.getElementById('hex' + i + '3').innerHTML =   chroma(color[3][0], color[3][1], color[3][2]);
    document.getElementById('hex' + i + '4').innerHTML =   chroma(color[4][0], color[4][1], color[4][2]);
    document.getElementById('hex' + i + '5').innerHTML =   chroma(color[5][0], color[5][1], color[5][2]);
    document.getElementById('hex' + i + '6').innerHTML =   chroma(color[6][0], color[6][1], color[6][2]);
    document.getElementById('hex' + i + '7').innerHTML =   chroma(color[7][0], color[7][1], color[7][2]);
    document.getElementById('hex' + i + '8').innerHTML =   chroma(color[8][0], color[8][1], color[8][2]);
    document.getElementById('hex' + i + '9').innerHTML =   chroma(color[9][0], color[9][1], color[9][2]);
  });
}

function name(outputs)
{
  let names = [];

  outputs.forEach((output, i) => {
    let namings = namer(rgbToHex(output.r5*255, output.g5*255, output.b5*255), { pick: ['basic']}).basic;
    let name = namings[0].name;

    if(names.includes(name)) name = namings[1].name;
    if(names.includes(name)) name = namings[2].name;
    if(names.includes(name)) name = namings[3].name;
    if(names.includes(name)) name = namings[4].name;
    if(names.includes(name)) name = namings[5].name;

    names.push(name);

    document.getElementById('name' + i).innerHTML = names[i];
  });

  palette.forEach((color, key) => {
    palette[key]['name'] = names[key];
  });

  return names;
}

let link = document.querySelector("link[rel~='icon']");
let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");

function changeFavicon(hex) {
  canvas.width = 16;
  canvas.height = 16;
  context.fillStyle = hex;
  context.fillRect(0, 0, 16, 16);
  context.fill();
  link.type = "image/x-icon";
  link.href = canvas.toDataURL();
}

function calculateBrandColorFit () {
  let zero=0, one=0, two=0, three=0, four=0, five=0, six=0, nine=0, eight=0, seven = 0;
  let dist = [];
  let it = 1000;
  for (let i = 0; i < it; i++) {
    let randomColor = rgbToHex(Math.random()*255, Math.random()*255, Math.random()*255);

    let first = shadesModel(randomColor);
    let now = calculateColorsHorizontally(randomColor, first);
    let brand = calculateBrandColor(randomColor, now)
    dist.push(Math.round(brand.distance))
    if(brand.fit == true) {
      console.log('fit')
      if(brand.color == 0) zero++
      if(brand.color == 1) one++
      if(brand.color == 2) two++
      if(brand.color == 3) three++
      if(brand.color == 4) four++
      if(brand.color == 5) five++
      if(brand.color == 6) six++
      if(brand.color == 7) seven++
      if(brand.color == 8) eight++
      if(brand.color == 9) nine++
    };
  }

  console.log(
    zero/it*100,
    one/it*100,
    two/it*100,
    three/it*100,
    four/it*100,
    five/it*100,
    six/it*100,
    seven/it*100,
    eight/it*100,
    nine/it*100,
  )

  var counts = {};
  dist.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  console.log(counts)
}

window.addEventListener('load', (event) => {
  //document.querySelector('.app-ui').style.display = 'flex';
});

function normalizeToLCH(inputs){
  palette = [];

  inputs.forEach((color) => {
    palette.push([
      chroma(color['r0.5']*255, color['g0.5']*255, color['b0.5']*255).lch(),
      chroma(color.r1*255, color.g1*255, color.b1*255).lch(),
      chroma(color.r2*255, color.g2*255, color.b2*255).lch(),
      chroma(color.r3*255, color.g3*255, color.b3*255).lch(),
      chroma(color.r4*255, color.g4*255, color.b4*255).lch(),
      chroma(color.r5*255, color.g5*255, color.b5*255).lch(),
      chroma(color.r6*255, color.g6*255, color.b6*255).lch(),
      chroma(color.r7*255, color.g7*255, color.b7*255).lch(),
      chroma(color.r8*255, color.g8*255, color.b8*255).lch(),
      chroma(color.r9*255, color.g9*255, color.b9*255).lch(),
    ])
  });

  return palette;
}

function toCharts()
{
  let luminosities = [];
  let chromas = [];
  let hues = [];
  let contrasts = [];
  let contrastsBlack = [];
  let contrastsWhite = [];

  palette.forEach((color, key) => {
    luminosities[key] = [];
    chromas[key] = [];
    hues[key] = [];
    contrasts[key] = [];
    contrastsBlack[key] = [];
    contrastsWhite[key] = [];

    color.forEach((shade) => {
      luminosities[key].push(shade[0])
    });

    color.forEach((shade) => {
      chromas[key].push(shade[1])
    });

    color.forEach((shade) => {
      hues[key].push(shade[2])
    });

    color.forEach((shade, shadeKey) => {
      if(shadeKey > 0 && shadeKey <= 9) {
        contrasts[key].push(chroma.contrast(chroma.lch(color[shadeKey - 1]), chroma.lch(shade).hex()));
      } else if(shadeKey === 0){
        contrasts[key].push(chroma.contrast('#ffffff', chroma.lch(color[shadeKey]).hex()));
      }
      if(shadeKey === 9){
        contrasts[key].push(chroma.contrast('#000000', chroma.lch(color[shadeKey]).hex()));
      }
    });

    color.forEach((shade, shadeKey) => {
      contrastsWhite[key].push(chroma.contrast('#ffffff', chroma.lch(color[shadeKey]).hex()))
    });
    color.forEach((shade, shadeKey) => {
      contrastsBlack[key].push(chroma.contrast('#000000', chroma.lch(color[shadeKey]).hex()))
    });
  });

  updateChart(luminosityCanva, luminosities);
  updateChart(chromaCanva, chromas);
  updateChart(hueCanva, hues);
  updateChart(contrastCanva, contrasts);
  updateChart(contrastWhiteCanva, contrastsWhite);
  updateChart(contrastBlackCanva, contrastsBlack);

}

function createGradient(colorIndex)
{
  let ctx = document.getElementById('luminosity-canva').getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 560, 0);

  gradient.addColorStop(0.09,  chroma.lch(palette[colorIndex][0]).css());
  gradient.addColorStop(0.17,  chroma.lch(palette[colorIndex][1]).css());
  gradient.addColorStop(0.27,  chroma.lch(palette[colorIndex][2]).css());
  gradient.addColorStop(0.37,  chroma.lch(palette[colorIndex][3]).css());
  gradient.addColorStop(0.485, chroma.lch(palette[colorIndex][4]).css());
  gradient.addColorStop(0.6,   chroma.lch(palette[colorIndex][5]).css());
  gradient.addColorStop(0.7,   chroma.lch(palette[colorIndex][6]).css());
  gradient.addColorStop(0.8,   chroma.lch(palette[colorIndex][7]).css());
  gradient.addColorStop(0.91,  chroma.lch(palette[colorIndex][8]).css());
  gradient.addColorStop(1,     chroma.lch(palette[colorIndex][9]).css());

  return gradient;
}

function setGradients(chart)
{
  let colors = {
    0: palette[0].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    1: palette[1].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    2: palette[2].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    3: palette[3].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    4: palette[4].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    5: palette[5].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    6: palette[6].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    7: palette[7].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    8: palette[8].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    9: palette[9].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
  };

  chart.data.datasets[0].borderColor = createGradient(0);
  chart.data.datasets[1].borderColor = createGradient(1);
  chart.data.datasets[2].borderColor = createGradient(2);
  chart.data.datasets[3].borderColor = createGradient(3);
  chart.data.datasets[4].borderColor = createGradient(4);
  chart.data.datasets[5].borderColor = createGradient(5);
  chart.data.datasets[6].borderColor = createGradient(6);
  chart.data.datasets[7].borderColor = createGradient(7);
  chart.data.datasets[8].borderColor = createGradient(8);
  chart.data.datasets[9].borderColor = createGradient(9);

  chart.data.datasets[0].pointBackgroundColor = colors[0];
  chart.data.datasets[1].pointBackgroundColor = colors[1];
  chart.data.datasets[2].pointBackgroundColor = colors[2];
  chart.data.datasets[3].pointBackgroundColor = colors[3];
  chart.data.datasets[4].pointBackgroundColor = colors[4];
  chart.data.datasets[5].pointBackgroundColor = colors[5];
  chart.data.datasets[6].pointBackgroundColor = colors[6];
  chart.data.datasets[7].pointBackgroundColor = colors[7];
  chart.data.datasets[8].pointBackgroundColor = colors[8];
  chart.data.datasets[9].pointBackgroundColor = colors[9];

  chart.data.datasets[0].pointBorderColor = colors[0];
  chart.data.datasets[1].pointBorderColor = colors[1];
  chart.data.datasets[2].pointBorderColor = colors[2];
  chart.data.datasets[3].pointBorderColor = colors[3];
  chart.data.datasets[4].pointBorderColor = colors[4];
  chart.data.datasets[5].pointBorderColor = colors[5];
  chart.data.datasets[6].pointBorderColor = colors[6];
  chart.data.datasets[7].pointBorderColor = colors[7];
  chart.data.datasets[8].pointBorderColor = colors[8];
  chart.data.datasets[9].pointBorderColor = colors[9];

  chart.update()
}

function updateChart(chart, values)
{
  let colors = {
    0: palette[0].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    1: palette[1].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    2: palette[2].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    3: palette[3].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    4: palette[4].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    5: palette[5].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    6: palette[6].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    7: palette[7].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    8: palette[8].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
    9: palette[9].map((color) => { return chroma.lch(color[0],color[1],color[2]).hex()}),
  };

  chart.data.datasets[0].data = values[0];
  chart.data.datasets[1].data = values[1];
  chart.data.datasets[2].data = values[2];
  chart.data.datasets[3].data = values[3];
  chart.data.datasets[4].data = values[4];
  chart.data.datasets[5].data = values[5];
  chart.data.datasets[6].data = values[6];
  chart.data.datasets[7].data = values[7];
  chart.data.datasets[8].data = values[8];
  chart.data.datasets[9].data = values[9];

  chart.data.datasets[0].borderColor = createGradient(0);
  chart.data.datasets[1].borderColor = createGradient(1);
  chart.data.datasets[2].borderColor = createGradient(2);
  chart.data.datasets[3].borderColor = createGradient(3);
  chart.data.datasets[4].borderColor = createGradient(4);
  chart.data.datasets[5].borderColor = createGradient(5);
  chart.data.datasets[6].borderColor = createGradient(6);
  chart.data.datasets[7].borderColor = createGradient(7);
  chart.data.datasets[8].borderColor = createGradient(8);
  chart.data.datasets[9].borderColor = createGradient(9);

  chart.data.datasets[0].pointBackgroundColor = colors[0];
  chart.data.datasets[1].pointBackgroundColor = colors[1];
  chart.data.datasets[2].pointBackgroundColor = colors[2];
  chart.data.datasets[3].pointBackgroundColor = colors[3];
  chart.data.datasets[4].pointBackgroundColor = colors[4];
  chart.data.datasets[5].pointBackgroundColor = colors[5];
  chart.data.datasets[6].pointBackgroundColor = colors[6];
  chart.data.datasets[7].pointBackgroundColor = colors[7];
  chart.data.datasets[8].pointBackgroundColor = colors[8];
  chart.data.datasets[9].pointBackgroundColor = colors[9];

  chart.data.datasets[0].pointBorderColor = colors[0];
  chart.data.datasets[1].pointBorderColor = colors[1];
  chart.data.datasets[2].pointBorderColor = colors[2];
  chart.data.datasets[3].pointBorderColor = colors[3];
  chart.data.datasets[4].pointBorderColor = colors[4];
  chart.data.datasets[5].pointBorderColor = colors[5];
  chart.data.datasets[6].pointBorderColor = colors[6];
  chart.data.datasets[7].pointBorderColor = colors[7];
  chart.data.datasets[8].pointBorderColor = colors[8];
  chart.data.datasets[9].pointBorderColor = colors[9];
  chart.update();
}

function updateColorInChart(chart, dataset, index, value, color) {
  chart.data.datasets[dataset].data[index] = value;
  chart.data.datasets[dataset].pointBackgroundColor[index] = color;
  chart.data.datasets[dataset].borderColor = createGradient(dataset);

  chart.update();
}

function editLuminosity(dataset, index, value){
  let idIndex = index;
  if(index === 0) idIndex = '0.5';

  let id = 'output' + dataset + idIndex;

  let el = document.getElementById(id);
  let initialColor = el.style.backgroundColor;

  let initialLCH = chroma(initialColor).lch();
  initialLCH[0] = value;

  let finalColor = chroma.lch(initialLCH);
  el.style.backgroundColor = finalColor.css();

  palette[dataset][index] = finalColor.lch();

  updateColorInChart(luminosityCanva, dataset, index, finalColor.lch()[0], finalColor.hex());
  updateColorInChart(chromaCanva, dataset, index, finalColor.lch()[1], finalColor.hex());
  updateColorInChart(hueCanva, dataset, index, finalColor.lch()[2], finalColor.hex());

  if(index === 0){
    updateColorInChart(contrastCanva, dataset, 0, chroma.contrast('white', finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, 1, chroma.contrast(chroma.lch(palette[dataset][0]).hex(), chroma.lch(palette[dataset][1]).hex()), finalColor.hex());
  } else if(index > 0 && index < 9){
    updateColorInChart(contrastCanva, dataset, index, chroma.contrast(chroma.lch(palette[dataset][index - 1]).hex(), finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, index + 1, chroma.contrast(chroma.lch(palette[dataset][index + 1]).hex(), finalColor.hex()), finalColor.hex());
  } else if(index === 9){
    updateColorInChart(contrastCanva, dataset, 9, chroma.contrast(chroma.lch(palette[dataset][8]).hex(), finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, 10, chroma.contrast('#000000', finalColor.hex()), finalColor.hex());
  }

  updateColorInChart(contrastBlackCanva, dataset, index, chroma.contrast('#000000', finalColor.hex()), finalColor.hex());
  updateColorInChart(contrastWhiteCanva, dataset, index, chroma.contrast('#ffffff', finalColor.hex()), finalColor.hex());
}

function editChroma(dataset, index, value){
  let idIndex = index;
  if(index === 0) idIndex = '0.5';

  let id = 'output' + dataset + idIndex;

  let el = document.getElementById(id);
  let initialColor = el.style.backgroundColor;

  let initialLCH = chroma(initialColor).lch();
  initialLCH[1] = value;

  let finalColor = chroma.lch(initialLCH);
  el.style.backgroundColor = finalColor.css();

  palette[dataset][index] = finalColor.lch();

  updateColorInChart(luminosityCanva, dataset, index, finalColor.lch()[0], finalColor.hex());
  updateColorInChart(chromaCanva, dataset, index, finalColor.lch()[1], finalColor.hex());
  updateColorInChart(hueCanva, dataset, index, finalColor.lch()[2], finalColor.hex());

  if(index === 0){
    updateColorInChart(contrastCanva, dataset, 0, chroma.contrast('white', finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, 1, chroma.contrast(chroma.lch(palette[dataset][0]).hex(), chroma.lch(palette[dataset][1]).hex()), finalColor.hex());
  } else if(index > 0 && index < 9){
    updateColorInChart(contrastCanva, dataset, index, chroma.contrast(chroma.lch(palette[dataset][index - 1]).hex(), finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, index + 1, chroma.contrast(chroma.lch(palette[dataset][index + 1]).hex(), finalColor.hex()), finalColor.hex());
  } else if(index === 9){
    updateColorInChart(contrastCanva, dataset, 9, chroma.contrast(chroma.lch(palette[dataset][8]).hex(), finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, 10, chroma.contrast('#000000', finalColor.hex()), finalColor.hex());
  }

  updateColorInChart(contrastBlackCanva, dataset, index, chroma.contrast('#000000', finalColor.hex()), finalColor.hex());
  updateColorInChart(contrastWhiteCanva, dataset, index, chroma.contrast('#ffffff', finalColor.hex()), finalColor.hex());
}

function editHue(dataset, index, value){
  let idIndex = index;
  if(index === 0) idIndex = '0.5';

  let id = 'output' + dataset + idIndex;

  let el = document.getElementById(id);
  let initialColor = el.style.backgroundColor;

  let initialLCH = chroma(initialColor).lch();
  initialLCH[2] = value;

  let finalColor = chroma.lch(initialLCH);
  el.style.backgroundColor = finalColor.css();

  palette[dataset][index] = finalColor.lch();

  updateColorInChart(luminosityCanva, dataset, index, finalColor.lch()[0], finalColor.hex());
  updateColorInChart(chromaCanva, dataset, index, finalColor.lch()[1], finalColor.hex());
  updateColorInChart(hueCanva, dataset, index, finalColor.lch()[2], finalColor.hex());

  if(index === 0){
    updateColorInChart(contrastCanva, dataset, 0, chroma.contrast('white', finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, 1, chroma.contrast(chroma.lch(palette[dataset][0]).hex(), chroma.lch(palette[dataset][1]).hex()), finalColor.hex());
  } else if(index > 0 && index < 9){
    updateColorInChart(contrastCanva, dataset, index, chroma.contrast(chroma.lch(palette[dataset][index - 1]).hex(), finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, index + 1, chroma.contrast(chroma.lch(palette[dataset][index + 1]).hex(), finalColor.hex()), finalColor.hex());
  } else if(index === 9){
    updateColorInChart(contrastCanva, dataset, 9, chroma.contrast(chroma.lch(palette[dataset][8]).hex(), finalColor.hex()), finalColor.hex());
    updateColorInChart(contrastCanva, dataset, 10, chroma.contrast('#000000', finalColor.hex()), finalColor.hex());
  }

  updateColorInChart(contrastBlackCanva, dataset, index, chroma.contrast('#000000', finalColor.hex()), finalColor.hex());
  updateColorInChart(contrastWhiteCanva, dataset, index, chroma.contrast('#ffffff', finalColor.hex()), finalColor.hex());
}

function grayOutLines(chart, datasetIndex){
  chart.data.datasets.forEach((dataset, key) => {
    if(key !== datasetIndex) chart.data.datasets[key].borderColor = 'rgba(173, 173, 173, 0.19)';
    if(key !== datasetIndex) chart.data.datasets[key].pointBackgroundColor = 'rgba(173, 173, 173, 0.19)';
    if(key !== datasetIndex) chart.data.datasets[key].pointBorderColor = 'rgba(173, 173, 173, 0.19)';
  });
}


// Menu Tabs
let menuButtons = Array.from(document.getElementById('menu-buttons').children);
let graphsPage = document.getElementById('graphs');
let codePage = document.getElementById('code');
let pages = Array.from(document.getElementById('pages').children);

document.getElementById('graphs-btn').addEventListener('click', (e) => {
  menuButtons.forEach((button) => {
    button.classList.remove('border-b-2');
    button.classList.remove('border-blue-500');
    button.classList.remove('text-blue-500');
    button.classList.add('hover:text-gray-800');
    button.classList.remove('cursor-default');
  });

  pages.forEach((page) => { page.classList.add('hidden')});

  e.target.classList.add('border-b-2');
  e.target.classList.add('border-blue-500');
  e.target.classList.add('text-blue-500');
  e.target.classList.remove('hover:text-gray-800');
  e.target.classList.add('cursor-default');

  graphsPage.classList.remove('hidden')
});

document.getElementById('code-btn').addEventListener('click', (e) => {
  menuButtons.forEach((button) => {
    button.classList.remove('border-b-2');
    button.classList.remove('border-blue-500');
    button.classList.remove('text-blue-500');
    button.classList.add('hover:text-gray-800');
    button.classList.remove('cursor-default');
  });

  pages.forEach((page) => { page.classList.add('hidden')});

  e.target.classList.add('border-b-2');
  e.target.classList.add('border-blue-500');
  e.target.classList.add('text-blue-500');
  e.target.classList.remove('hover:text-gray-800');
  e.target.classList.add('cursor-default');

  codePage.classList.remove('hidden')
});

// Copy Button
let clipboard = new ClipboardJS('#copy-btn');

clipboard.on('success', (e) => {
  document.getElementById('copy-btn').innerText = 'Copied';
  e.clearSelection();
  setTimeout(() => {
    document.getElementById('copy-btn').innerText = 'Copy';
  }, 1000)
});