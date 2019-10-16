const findKeyByValue = function(bestShows, value) {
  let results = {};

  let objectKeys = Object.keys(bestShows);

  for (const key of objectKeys) { //key is just variable that can be accessed within the loop; key = iterated value
       //bestShows[key] === value;  calling the key/property
        if (bestShows[key] === value) {
            return key;
        }
  }
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);