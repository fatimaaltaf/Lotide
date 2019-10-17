//TEST ASSERTION FUNCTIONS

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
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

// ACTUAL FUNCTION

const implementWithout = function(source, itemsToRemove) {
     
  let newList = [];

  for (let item of source) { // item = value - each item in the array looping through source
    let shouldRemove = false
    for (let item2 of itemsToRemove) {
      if (item === item2) {
        shouldRemove = true
      } 
    }
    if (!shouldRemove) newList.push(item)
  }

  return newList
    
};

// TEST CODE
console.log(implementWithout([1, 2, 3], [1])) // => [2, 3]
console.log(implementWithout(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(implementWithout(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

