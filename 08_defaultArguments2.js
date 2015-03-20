var makeImportant = (str, exclamationNum = str.length) => {
  return str + '!'.repeat(exclamationNum);
};

module.exports = makeImportant;

// module.exports = (string, bangs = string.length) => string + "!".repeat(bangs);