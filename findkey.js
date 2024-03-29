let starObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
};

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const findKey = function(obj, callback) {

    for (let k in obj) {
         if (callback(obj[k]) === true) {
             return k;
         }
    }
}
// function filter(x) {
//     console.log(x.stars)
//     return x.stars === 2
// }

// console.log(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2) ); // => "noma"

const result = findKey(starObject, x => x.stars === 2);

console.log(result);

assertEqual(findKey(starObject, x => x.stars === 2), "noma");