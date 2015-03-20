// replace the 'apply' method
var arr = process.argv.splice(2);

// the same as Math.min.apply(this, arr);
console.log(`The minimum of [${arr}] is ${Math.min(...arr)}`);