const brain = require('../../node_modules/brain.js/dist/brain-browser');
const colors = require('./../dataset');
const getAccuracy = require('./../getAccuracy');
const asciichart = require ('asciichart');

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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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

//dataset = shuffle(dataset)

const SPLIT = 220;
const trainData = dataset.slice(0, SPLIT);
const testData = dataset.slice(SPLIT + 1);

const netOptions = {
  activation: 'sigmoid',
  hiddenLayers: [6],
};

let s0 = [];
let s1 = [];
let acc;

const trainingOptions = {
  iterations: 20000,
  errorThresh: 0.0002,
  learningRate: 0.0005,
  logPeriod: 1000,
  log: function (details) {
    acc = getAccuracy(this.net, testData)
    s0.push(details.error);
    s1.push(acc);
    process.stdout.clearScreenDown();  // clear current text
    process.stdout.cursorTo(0, 3);  // move cursor to beginning of line
    process.stdout.write(asciichart.plot([s0],  { height: 30,colors: [asciichart.blue, asciichart.red] }));
    process.stdout.cursorTo(0, 40);  // move cursor to beginning of line
    process.stdout.write(JSON.stringify(details.iterations) + ' Acc_test_data:' + acc + ' error:' + details.error);
  },
};

// Browser & node.js compatibility
if(brain.default){
  net = new brain.default.NeuralNetwork(netOptions);

} else {
  net = new brain.NeuralNetwork(netOptions);
}

var i = 0;  // dots counter

// setInterval(function() {
//   process.stdout.clearLine();  // clear current text
//   process.stdout.cursorTo(0);  // move cursor to beginning of line
//   i = (i + 1) % 4;
//   var dots = new Array(i + 1).join(".");
//   process.stdout.write("Waiting" + dots);  // write text
// }, 300);

net.train(trainData, trainingOptions);
//process.stdout.cursorTo(0);  // move cursor to beginning of line

 console.log(net.toFunction().toString())
 //const accuracy = getAccuracy(net, testData);
 //console.log('mae: ', accuracy);

module.exports = net;