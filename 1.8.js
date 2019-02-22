const readlineSync = require("readline-sync");
let questions = 3;
let name = readlineSync.question(questions-- + ")What is your name? ");
let age = readlineSync.question(questions-- + ")On what year where you born? ");
let city = readlineSync.question(questions-- + ")Wich city are you from? ");
console.log("Hello " + name + " i see that you are " + age + " years old. The city " + city + " is very boring!");
