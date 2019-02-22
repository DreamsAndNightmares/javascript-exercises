const readlineSync = require("readline-sync");
let number1 = readlineSync.question("Give me a number. ");
let number2 = readlineSync.question("Give me another number. ");
console.log(number1 % number2);
