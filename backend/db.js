
const path = require('path');
const fs = require('fs');

function write(file, obj) {
    fs.writeFileSync(path.join(__dirname, 'db', file), JSON.stringify(obj));
}

function read(file) {

    let obj;

    try {
        obj = JSON.parse(fs.readFileSync(path.join(__dirname, 'db', file).toString()));
    }
    catch (error) { }

    return obj;
}

module.exports = { write, read };