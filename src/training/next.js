const brain = require('../../node_modules/brain.js/dist/brain-browser');
const asciichart = require ('asciichart');

// Utils
const getAccuracy = require('./../training/utils/getAccuracy');
const hexToRgb = require('./../training/utils/hexToRgb');
const shuffle = require('./../training/utils/shuffle');

// Datasets
const ui = require('./../datasets/ui');
const originals = require('./../datasets/originals');

let datasets = [originals, ui];
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

dataset = shuffle(data);

const SPLIT = data.length*0.9;
const trainData = dataset.slice(0, SPLIT);
const testData = dataset.slice(SPLIT + 1);

const netOptions = {
  activation: 'sigmoid',
  hiddenLayers: [3],
};

let s0 = [];
let s1 = [];
let acc;

const trainingOptions = {
  iterations: 20000,
  errorThresh: 0.0002,
  learningRate: 0.001,
  logPeriod: 1000,
  log: function (details) {  // Log accuracy while training
    acc = getAccuracy(this.net, testData);
    s0.push(details.error);
    s1.push(acc);

    if(!brain.default){ // Log in node console
      process.stdout.clearScreenDown();
      process.stdout.cursorTo(0, 3);
      process.stdout.write(asciichart.plot([s0, s1],  { height: 30,colors: [asciichart.blue, asciichart.red] }));
      process.stdout.cursorTo(0, 40);
      process.stdout.write(JSON.stringify(details.iterations) + ' Acc_test_data: ' + acc + ' error: ' + details.error);
    } else { // Log in browser console
      console.clear();
      console.log(asciichart.plot([s0, s1],  { height: 30,colors: [asciichart.blue, asciichart.red] }));
      console.log(JSON.stringify(details.iterations) + ' Acc_test_data: ' + acc + ' error: ' + details.error);
    }
  },
};

// Browser & node.js compatibility
if(brain.default){
  net = new brain.default.NeuralNetwork(netOptions);
} else {
  net = new brain.NeuralNetwork(netOptions);
}

// Train NN
net.train(trainData, trainingOptions);

// Output NN as a function
console.log(net.toFunction().toString().split('anonymous').join('nextModel') + '\n' + 'module.exports = nextModel;\n');

// Export to use it as a module in next.html
module.exports = net;
