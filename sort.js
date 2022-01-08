let path = require('path');
processFile('Text.txt');

function processFile(file) {
    let extension = path.extname(file);
    console.log('Extension is: ' + extension);
}
