const readlineSync = require("readline-sync");
let k = 0;
let n = 0;
let m = 0;
let questions = 0;

k = readlineSync.question("Enter a number: ");
m = m + n;

while(questions != k)
{
  n = readlineSync.question("Enter a number: ");
  m = m + n;
  questions++;
}
console.log(m);
