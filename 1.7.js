const readlineSync = require("readline-sync");
let shoeSize = readlineSync.question("What is your shoe size? ");
let birthday = readlineSync.question("On what year where you born? ");
console.log((shoeSize * 2 + 5) * 50 - birthday + 1766);
