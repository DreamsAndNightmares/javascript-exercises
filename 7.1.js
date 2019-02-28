const readlineSync = require("readline-sync");

let random = Math.floor(Math.random() * 101);
let guess = 101;
console.log(random);

while (guess != random)
{
  guess = readlineSync.question("Guess the number between 0-100! ");
  if(guess > random)
  {
    console.log("That's too much!");
  }
  else if (guess < random)
  {
    console.log("Guess higher ;)");
  }
}

console.log("Congrats! You guessed the number " + random + " correctly!");
