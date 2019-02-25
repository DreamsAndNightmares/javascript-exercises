const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Enter a number you would like to factorialize: "));

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorialize(n))
