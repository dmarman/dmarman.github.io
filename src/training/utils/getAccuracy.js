function getAccuracy (net, testData) {
  let error = 0;
  let n = 0;

  testData.forEach((datapoint) => {
    const output = net.run(datapoint.input);

    Object.keys(datapoint.output).forEach((point) => {
      error += Math.abs((datapoint.output[point] - output[point])/datapoint.output[point]);
      n++
    });
  });

  return error/n
}

module.exports = getAccuracy;
