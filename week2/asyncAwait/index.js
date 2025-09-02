
// function sum(n) {
//     return n * (n+1);
// }

// const ans = sum(5);
// console.log(ans);

const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(error, contents) {
    console.log(contents)
});   // asynchronous
// console.log(contents);

const data = fs.readFileSync("b.txt", "utf-8");   // synchronous
console.log(data);