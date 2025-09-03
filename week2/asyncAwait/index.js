// const fs = require('fs');

// function print(error, data) {
//     console.log(data);
// }

// fs.readFile("a.txt", "utf-8", print)   // asynchronous

// fs.readFile("b.txt", "utf-8", print);   // asynchronous

// setTimeout(() => {
//     console.log("Timeout done!");
// }, 0);

// console.log("Done!");



function timeout() {
    console.log("Button clicked!");
}

console.log("Hii there!");

setTimeout(timeout, 2000);

console.log("Bye there!");

let a = 0;
for(let i=0; i<1000000000; i++) {
    a = a + 1;
}

console.log("Expensive opration done!");