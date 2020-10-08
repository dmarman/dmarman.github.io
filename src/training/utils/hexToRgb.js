function hexToRgb(hex, id = '') {
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
}

module.exports = hexToRgb;
