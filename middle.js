//TEST ASSERTION FUNCTIONS

const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]