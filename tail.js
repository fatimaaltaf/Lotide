const assertEqual = require('./assertEqual');

const tail = function(array) {
  let output = array.slice(1);
  return output;
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail; 