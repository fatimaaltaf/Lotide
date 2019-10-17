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

const flatten = function(array) {
    let newList = [];

    //console.log(array.length[0][1])
    if (Array.isArray(array)) { //check if initial array is an array, if not then don't do anything  
        for (let i = 0; i < array.length; i++) { //loop through outer array and assign iterating values to i
            if (Array.isArray(array[i])) {
                let innerArray = array[i];
                for (let j = 0; j < innerArray.length; j++) { //loop through inner array 
                    // console.log(j);
                    newList.push(innerArray[j])// push values from i and j into new array 
                    // console.log(newList);
                }  
            } else {
                    newList.push(array[i]);
            }
        }
    } else {
        console.log("this is not an array");
    }
    return newList;
}; 

// TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
