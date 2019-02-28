const readlineSync = require("readline-sync");

let option = 0;
let config = '{"result":true, "count":42}';
let flavors;

menu();

while(option != 4)
{
  if(option == 1)
  {
    console.log('\033[2J');
    flavors = JSON.parse(config);
    console.log(flavors.count);
  }
  else if (option == 2)
  {
    console.log('\033[2J');
  }
  else if (option == 3)
  {
    console.log('\033[2J');
  }
  else if (option == 4)
  {

  }

}

function menu()
{
  console.log(
  "Hello! Welcome to the Pizza Flavors Manager." + '\n' + '\n' +
  "Please choose your actions:" + '\n' +
  "1 - List all the pizza flavors" + '\n' +
  "2 - Add a new pizza flavor" + '\n' +
  "3 - Remove a pizza flavor" + '\n' +
  "4 - Exit this program"
  );
  option = new Number(readlineSync.question("Enter your action's number: "));
}
