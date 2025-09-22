const fs = require('fs');

function readTheFile(sendTheValue) {
    fs.readFile("file.txt", "utf-8", function(err, data) {
        sendTheValue(data);
    })
}

function readFile(fileName) {
    // read the file and return it's value
    return new Promise(readTheFile);
}

let p = readFile();

function callback(contents) {
    console.log(contents)
}

p.then(callback);