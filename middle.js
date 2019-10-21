const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION

const middle = function(array) {    
    if (array.length <= 2) {
        return [];
    } else if (array.length % 2 === 0) { //checks to see middle point
        let element1 = array.length / 2 - 1; //divide the array in half
        let element2 = array.length / 2;
        return [array[element1], array[element2]];
    } else {
         let element3 = Math.floor(array.length / 2); 
         return [array[element3]];
    }
};
  
  //TEST CODE

// assertEqualsArray(middle([1])); // => []
// assertEqualsArray(middle([1, 2])); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertEqualsArray(middle([1, 2, 3, 4])) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

module.exports = middle;