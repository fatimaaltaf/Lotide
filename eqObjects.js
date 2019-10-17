// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

    let keyValue1 = Object.keys(object1);
    let keyValue2 = Object.keys(object2);

    if (keyValue1.length != keyValue2.length) {
    return false
}

for (const key of keyValue1) {
    if (object1[key] !== object2[key]) {
        return false;
    }
}
return true //checks first two for false, if it passes those conditions, it is true
};

// ASSERT EQUAL
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


// EQARRAYS

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

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] }; 
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqArrays(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqArrays(cd, cd2), false); // => false