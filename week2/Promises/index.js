// Promise that resolves after a delay

function waitFor3S(resolve) {    // resolve == main
    setTimeout(resolve, 3000);
}

function setTimeoutPromise() {    // miliseconds
    return new Promise(waitFor3S);
}

function main() {
    console.log("3 seconds have passed");
}

setTimeoutPromise(3000).then(main);




// let p = setTimeoutPromise(3000);
// console.log(p); // Promise { <pending> }