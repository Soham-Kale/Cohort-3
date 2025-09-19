// Promise that resolves after a delay

function setTimeoutPromise(ms) {    // miliseconds
    return new Promise((resolve) => { setTimeout(resolve, ms)})
}

function callback() {
    console.log("Printed after 3 seconds");
}

// setTimeoutPromise(3000).then(callback);

let p = setTimeoutPromise(3000);
console.log(p); // Promise { <pending> }