const fs = require('fs');
let path = require('path');
processFile('Test.txt');

function processFile(file) {
    let extension = path.extname(file);
    console.log('Extension is: ' + extension);

    fs.mkdir(extension, function () {
        fs.rename(__dirname + '/' + file, __dirname + '/' + extension + '/' + file, copySuccess);
    });

}

function copySuccess() {
    console.log('Datei kopiert');
}