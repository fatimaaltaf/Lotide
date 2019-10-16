const countLetters = function(allLetters) {
    const results = {}

    for (const letters of allLetters) {
            if (results [letters]) {
                results[letters] += 1; //if letter does not exist, add to the allLetters
            } else {
                results[letters] = 1; //if already seen, add one

            }  
    }
  return results;
};

  const words = "lighthouse in the house".split(" ").join("");

  const results1 = countLetters(words);

  console.log(results1);