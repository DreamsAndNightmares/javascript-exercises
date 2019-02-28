const readlineSync = require("readline-sync");

let n = "";

n = new Number(readlineSync.question("Give me a number and i wil give you the divisor numbers! "));

console.log(factors(n));

function factors(n)
{
 var num_factors = [], i;

 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
