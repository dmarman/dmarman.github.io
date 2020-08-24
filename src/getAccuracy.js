exports.getAccuracy = function(net, testData) {
  let error = 0;
  let n = 0;

  testData.forEach((datapoint) => {
    const output = net.run(datapoint.input);

    Object.keys(datapoint.output).forEach((point) => {
      error += Math.abs((datapoint.output[point] - output[point])/datapoint.output[point])
      n++
    });

    //console.log(output.r1, datapoint.output.r1)
    //console.log(output.r2, datapoint.output.r2)
    //console.log(output.r3, datapoint.output.r3)
    //console.log(output.r4, datapoint.output.r4)
  });

  return error/n
}