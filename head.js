const assertEqual = require('./assertEqual');

const head = function(array) {
let output = array[0]; //return first item in array

return output;
};

  
// // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;