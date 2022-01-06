let fs = require('fs');
let path = 'G:/Projects/JavaScript/DevAcademy NodeJS/'

fs.mkdir('Savegames', CreateDir);
fs.appendFile('savegame01.txt', 'life-100', createFile);
fs.rename(path + 'savegame01.txt', path + 'Savegames/savegame01.txt', copySuccess);

function CreateDir() {
    console.log('Ordner erstellt');
}

function createFile() {
    console.log('Datei erstellt');
}

function copySuccess() {
    console.log('Datei kopiert');
}