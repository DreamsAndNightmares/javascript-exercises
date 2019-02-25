const readlineSync = require("readline-sync");

let myObject = {
  "name":"",
  "production":"",
  "members":"",
};

function askTvSerie()
{
  myObject.name = readlineSync.question("What is your favorite TV serie? ");
  myObject.production  = readlineSync.question("What's the production year? ");
  myObject.members  = readlineSync.question("What are the names of the cast members? ");

  return randomizeCast(myObject);
}

function randomizeCast(tvSerie)
{
  return myObject["members"].split(' ').sort(function(){return 0.5-Math.random()}).join(' ');
}

console.log(askTvSerie());
