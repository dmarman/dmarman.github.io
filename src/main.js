import brain from 'brain.js';
import colors from './dataset';
import '@simonwep/pickr/dist/themes/classic.min.css';
import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
import { getAccuracy } from './getAccuracy';
import model from './model'

const pickrButton = Pickr.create({
  el: '.pickr',
  theme: 'nano', // or 'monolith', or 'nano'
  swatches: [
    'rgba(244, 67, 54, 1)',
    'rgba(233, 30, 99, 1)',
    'rgba(156, 39, 176, 1)',
    'rgba(103, 58, 183, 1)',
    'rgba(0, 105, 255, 1)',
    'rgba(33, 150, 243, 1)',
    'rgba(3, 169, 244, 1)',
    'rgba(0, 188, 212, 1)',
    'rgba(0, 150, 136, 1)',
    'rgba(76, 175, 80, 1)',
    'rgba(139, 195, 74, 1)',
    'rgba(205, 220, 57, 1)',
    'rgba(255, 235, 59, 1)',
    'rgba(255, 193, 7, 1)'
  ],
  default: '#0069FF',
  comparison: false,
  components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      input: true
    }
  }
});

pickrButton.on('change', instance => {
  let out = model(instance.toHEXA().toString())

  draw(out);
});

const hexToRgb = (hex, id = '') => {
  let arr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));

  let keys = [
    'r' + id,
    'g' + id,
    'b' + id
  ];

  let output = {};

  keys.forEach((key, num) => {
    output[key] = arr[num]/255
  });

  return output;
};

let dataset = [];

colors.forEach((color, key) => {
  Object.keys(color).forEach((inputShade) => {
    let output = {};

    Object.keys(color).forEach((outputShade) => {
        Object.assign(output, hexToRgb(color[outputShade], outputShade/100))
    });

    dataset.push({
      input: hexToRgb(color[inputShade]),
      output: output
    });

  });
});

const SPLIT = 90;
const trainData = dataset.slice(0, SPLIT);
const testData = dataset.slice(SPLIT + 1);

// const net = new brain.NeuralNetwork({
//   activation: 'sigmoid',
//   hiddenLayers: [50],
//   iterations: 300,
//   learningRate: 0.0001
// });

//net.train(trainData);
//console.log(net.toFunction())



//const accuracy = getAccuracy(net, testData);
// console.log('mae: ', accuracy);
//
// document.getElementById('result').innerHTML = brain.utilities.toSVG(
//   net,
//   //options
// );

function draw(output)
{
  document.getElementById('output1').style.backgroundColor = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
  document.getElementById('output2').style.backgroundColor = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
  document.getElementById('output3').style.backgroundColor = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
  document.getElementById('output4').style.backgroundColor = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
  document.getElementById('output5').style.backgroundColor = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
  document.getElementById('output6').style.backgroundColor = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
  document.getElementById('output7').style.backgroundColor = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
  document.getElementById('output8').style.backgroundColor = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
  document.getElementById('output9').style.backgroundColor = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';
}



