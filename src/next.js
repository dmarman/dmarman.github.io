const brain = require('../node_modules/brain.js/dist/brain-browser').default;
import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
const net = require('./training/next');

const pickrButton = Pickr.create({
  el: '.pickr',
  theme: 'nano', // or 'monolith', or 'nano'
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
  let choosen = hexToRgb(instance.toHEXA().toString())
  let out = net.run(choosen)
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

// let dataset = [];
//
// for(let i = 0; i < colors.length; i++){
//
//   let shades = ['50','100','200','300','400','500','600','700','800','900'];
//
//   shades.forEach(shade => {
//     let steps = [1,2,3,4,5,6,7,8,9];
//
//     let out = {};
//
//     steps.forEach((step) => {
//       let next = i + step;
//       if(next >= colors.length) next = next - colors.length;
//
//       Object.assign(out, hexToRgb(colors[next][shade], step))
//     });
//
//     dataset.push({
//       input: hexToRgb(colors[i][shade]),
//       output: out
//     })
//   })
//
// }
//
// console.log(dataset)
//
// dataset = shuffle(dataset)
//
// const SPLIT = 200*0.5;
// const trainData = dataset.slice(0, SPLIT);
// const testData = dataset.slice(SPLIT + 1);


// const netOptions = {
//   activation: 'sigmoid',
//   hiddenLayers: [30],
// };
// const trainingOptions = {
//   iterations: 30,
//   errorThresh: 0.0002,
//   learningRate: 0.3,
//   logPeriod: 10,
//   //log: (details) => console.log(details),
// };
//
// const crossValidate = new brain.CrossValidate(brain.NeuralNetwork, netOptions);
// const stats = crossValidate.train(dataset, trainingOptions);
// stats.sets.forEach(set => console.log(set))
//
// const net = crossValidate.toNeuralNetwork();
// //net.train(trainData, trainingOptions);
//
// const accuracy = getAccuracy(net, testData);
// console.log('mae: ', accuracy);
//
// console.log(net.toFunction().toString())


document.getElementById('result').innerHTML = brain.utilities.toSVG(
  net,
);

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



