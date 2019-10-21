const assertEqual = require('./assertEqual');

const head = function(array) {
let output = array[0]; //return first item in array

return output;
};

//console.log(head([1, 2, 3]));

// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log(`Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`Assertion Failed: ${actual} !== ${expected}`);
//     }
    
//   };
  
// // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;