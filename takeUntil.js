// ASSERT ARRAYS EQUAL
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

// HIGH-CALL FUNCTION

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //array with number values
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
    
    const results = [];

    for (let element of array) {
        if (callback(element) === false) {
            results.push(element);
        } else {
            break; //ends for...loop
        }
    }
    return results;
};

const results1 = takeUntil(data1, x => x < 0); 

console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);



// SAMPLE CODE

// const petNames = ['cat', 'dog', 'fish', 'bat', 'rat']


// function checkIfFish(x) {
//     return x === 'fish'
// };


// const results2 = takeUntil(petNames, checkIfFish)

// console.log(results2);