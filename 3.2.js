let array = [1, 2, 3, 4, 5];
//let array = [100, 101, 102];
let total = 0;
array.forEach(function(entry) {
    total = total + entry;
});

console.log(total/array.length);
