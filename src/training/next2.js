
// Utils
const getAccuracy = require('./../training/utils/getAccuracy');
const hexToRgb = require('./../training/utils/hexToRgb');
const shuffle = require('./../training/utils/shuffle');

// Datasets
const ui = require('./../datasets/ui');
const originals = require('./../datasets/originals');

delete ui.gray
delete originals.gray

let datasets = [ui, originals];
let data = [];

// Prepare data for NN
datasets.forEach((dataset) => {
  for(let i = 0; i < Object.keys(dataset).length; i++){
    let shades = ['50','100','200','300','400','500','600','700','800','900'];

    shades.forEach(shade => {
      let steps = Object.keys(dataset);
      let out = {};

      steps.forEach((step, key) => {
        let next = i + key;
        if(next >= Object.keys(dataset).length) next = next - Object.keys(dataset).length;

        Object.assign(out, hexToRgb(dataset[steps[next]][shade], key))
      });

      data.push({
        input: hexToRgb(dataset[steps[i]][shade]),
        output: out
      })
    })
  }
});

//dataset = shuffle(data);

data.forEach((point) => {
  // X
  console.log(point.input.r + ',' + point.input.g + ',' + point.input.b)

  // Y
  let output = '';
  for(let i = 0; i < 9; i++) {
    output += point.output['r' + i] + ',' + point.output['g' + i] + ',' + point.output['b' + i]  + ','
  }
  //console.log(output.slice(0, -1))
})

