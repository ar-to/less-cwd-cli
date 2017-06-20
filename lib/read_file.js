const fs = require('fs');

function readFile(filename, directory) {
    directory = directory || process.cwd() + '/';//directory arg or defaults to cwd
    dirAndFile = directory + filename + '.less';//

    let readFile = fs.readFile(dirAndFile, (err, data) =>{
        if (err) throw new Error('directory not found');
        try {
            console.log(data.toString());
        } catch (err) {
            console.log('could not read file')
        }

    })
};

module.exports = readFile;