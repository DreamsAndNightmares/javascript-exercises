const readlineSync = require("readline-sync");
let min = readlineSync.question("Min value= ");
let max = readlineSync.question("Max value= ");
let current = readlineSync.question("Current value= ");
if(max < min)
{
  console.log("You're not very smart.");
  return;
}
if (current>min && current<max)
{
  console.log("Current is between min & max");
}
else
{
  console.log("Current is no between min & max");
}
