const hexToRgb = require('../../training/utils/hexToRgb');

function wrapper(fn) {

  return function shadesModel(input) {
    console.log(input, hexToRgb(input))
    return fn(hexToRgb(input));
  };
}

module.exports = wrapper;
