const brain = require('../../node_modules/brain.js/dist/brain-browser');
const asciichart = require ('asciichart');

// Utils
const getAccuracy = require('./../training/utils/getAccuracy');
const hexToRgb = require('./../training/utils/hexToRgb');
const shuffle = require('./../training/utils/shuffle');

// Datasets
const originals = require('./../datasets/originals');
const grays = require('./../datasets/grays');
const news = require('./../datasets/news');
const ui = require('./../datasets/ui');

const hand = require('./../datasets/hand');
const newsRevised = require('./../datasets/news-revised');
const newsRevisedDes = require('./../datasets/news-revised-desaturated');
const newsRevisedDes2 = require('./../datasets/news-revised-desaturated-2');
const newsRevisedDes3 = require('./../datasets/news-revised-desaturated-3');
const newsRevisedDes4 = require('./../datasets/news-revised-desaturated-4');
const newsRevisedDes5 = require('./../datasets/news-revised-desaturated-5');
const newsRevisedDes6 = require('./../datasets/news-revised-desaturated-6');
const may = require('./../datasets/may/may');

let data = [];
//let datasets = [newsRevised, newsRevisedDes, newsRevisedDes2, newsRevisedDes3, newsRevisedDes3, newsRevisedDes4, newsRevisedDes5, newsRevisedDes6];
let datasets = [may];
console.log(datasets)
// Prepare data for NN
datasets.forEach((dataset) => {
  Object.keys(dataset).forEach((color) => {
    Object.keys(dataset[color]).forEach((shade) => {
      let output = {};

      Object.keys(dataset[color]).forEach((outputShade) => {
        Object.assign(output, hexToRgb(dataset[color][outputShade], outputShade/100))
      });

      data.push({
        input: hexToRgb(dataset[color][shade]),
        output: output
      });
    })
  });
});

dataset = shuffle(data);

const SPLIT = data.length*0.8;
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
  iterations: 15000,
  errorThresh: 0.0002,
  learningRate: 0.001,
  logPeriod: 1000,
  log: function (details) { // Log accuracy while training
    acc = 0;//getAccuracy(this.net, testData);
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

      console.log(asciichart.plot([s0, s1],  { height: 30,colors: [asciichart.red, asciichart.blue] }));
      console.log(JSON.stringify(details.iterations) + ' Acc_test_data: ' + acc + ' error: ' + details.error);
    }
  },
};

// Create NN
if(brain.default){ // Browser & node.js compatibility
  net = new brain.default.NeuralNetwork(netOptions);
} else {
  net = new brain.NeuralNetwork(netOptions);
}

// Train NN
net.train(trainData, trainingOptions);

// Output NN as a function
console.log(net.toFunction().toString().split('anonymous').join('shadesModel') + '\n' + 'module.exports = shadesModel;\n');

// Export to use it as a module in shades.html
module.exports = net;
