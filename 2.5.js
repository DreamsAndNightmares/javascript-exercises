const readlineSync = require("readline-sync");
let number = 0;
while(number != 42)
{
  number = readlineSync.question("What is your favorite number? ");
  readlineSync.question("Are you sure? ");
}
