let array = [1, 2, 3, 4, 5];
let newarray = [];

//Push method
array.forEach(function(entry) {
    newarray.push(entry)
});

//Single method
let bonus = array.slice(0);

console.log(newarray);
console.log(bonus);
