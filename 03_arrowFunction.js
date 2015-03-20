var inputs = process.argv.slice(2),
  resultAcronyms = inputs.map(input => input[0])
    .reduce((prevLetter, currLetter) => prevLetter + currLetter);

console.log(`[${inputs}] becomes "${resultAcronyms}"`);