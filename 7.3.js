const readlineSync = require("readline-sync");let n = new Number(readlineSync.question("Division of: "));console.log(a(n));function a(n){let b=[],i;for(i=1;i<=n;i++){if(n%i==0){b.push(i);}}return b;}
