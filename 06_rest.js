// replace the 'call' method
var average = function (...args) {
  var total = args.reduce((prev, next) => {
    return prev + next;
  }, 0);
  return total/args.length;
};

module.exports = average;