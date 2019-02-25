const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Enter a number: "));
let array = []

function multiRand(n){
  for (i = 0; i < n; i++) {
  array.push(Math.floor(Math.random() * 11));
}
  return array;
}

function average(arr) {
  return n/array.length;
}

function min(arr){
  return Math.min(...array);
}

function max(arr){
  return Math.max(...array);
}

console.log("Generated array: " + multiRand(n));
console.log("Average in array: " + average(array));
console.log("Minimum in array: " + min(array));
console.log("Maximum in array: " + max(array));
