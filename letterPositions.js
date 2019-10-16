const letterPositions = function(sentence) {
    const results = {};

    for (const index in sentence) {
        let character = sentence[index] //actual character at index position
        if (results[character]) { //get - conditional 
           results[character].push(parseInt(index)); //get
        } else { //set 
            results[character] = [parseInt(index)]; //first time encountered
        } 
    }
    return results;
  };

// EQARRAYS FUNCTION
const eqArrays = function(array1, array2) {
    // if (array1.length !== array2.length) {
    //     return false;
    // }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

// ASSERT ARRAYS EQUAL
const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


// TEST CODE
const results1 = letterPositions("hello");

console.log(results1);

assertArraysEqual(letterPositions("hello").e, [1]); //index of the character




