const readlineSync = require("readline-sync");
let firstName = readlineSync.question("What's your first name? ");
let lastName = readlineSync.question("What's your last name? ");
let city = readlineSync.question("Where do you live? ");
console.log("Hello " + firstName + " " + lastName + " from " + city);
