//assertObjectsEqual 

const assertObjectsEqual = function (actual, expected) { 

    if (eqObjects(actual, expected)) {
        const inspect = require('util').inspect;
        console.log(`Example label: ${inspect(actual)}`);
        
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
}

//EQ OBJECTS
const eqObjects = function(object1, object2) {

    let keyValue1 = Object.keys(object1); // object stored as a new var
    let keyValue2 = Object.keys(object2); // object stored as a new var 

    if (keyValue1.length != keyValue2.length) { //comparing length of keys within object
    return false
}

for (const key of keyValue1) { //for...of loop that checks if object1's key is not equal to object2's key
    if (object1[key] !== object2[key]) {
        return false;
    }
}
return true //checks first two for false, if it passes those conditions, it is true
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

