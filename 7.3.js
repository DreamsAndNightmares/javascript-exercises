const readlineSync=require("readline-sync");
let n=readlineSync.question("Division of: ");
console.log(a(n));
function a(c){
  let b=[];
  for(i=0;i<=c;i++){
    if(c%i==0&&c!=n&&c!=1){
      b.push(i)
    }
  }
  return b
}
