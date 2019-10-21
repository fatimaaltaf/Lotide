

const eqArrays = function(array1, array2) {
    // if (array1.length !== array2.length) {
    //     return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


const map = function(array, callback) { //here callback is second param
    
//   console.log('array: ', array); //check what prints
//   console.log('callback: ', callback);
    
  const results = [];
  for (let item of array) {
    results.push(callback(item)); //push to empty array the first letter of each string in array
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
  }

//TEST 1 - adding each value in array with an integer
const results1 = map([5, 10, 15], arrays => arrays + 5); // array is the var with values, arrays is func name and => after what we want map to process
console.log(results1);

assertArraysEqual(results1, [10, 15, 20]); // adds five to each number in the array

// TEST 2 - multiply x * x 
// const results1 = map([1, 2, 3], x => x * x );
// console.log(results1);

// assertArraysEqual(results1, [1, 4, 9] )


// TEST 3 - give back the number of letters in a string
// const string = ["hello", "goodbye", "lighthouse", "labs"]

// const results1 = map(string, strings => strings.length);
// console.log(results1);

// assertArraysEqual(results1, [5, 7, 10, 4])


// TEST 3 - 

module.exports = map;