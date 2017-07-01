const fs = require('fs');

function readLessFile(filename, directory, cb) {
    filename = filename || 'lessMain'; 
    directory = directory || process.cwd() + '/';//directory arg or defaults to cwd
    dirAndFile = directory + filename + '.less';//

    fs.readFile(dirAndFile, function (err, data) {
        if (err) return console.error('Could not read less file. Check file name and directory.');
        //console.log(data.toString());
        let dataString = data.toString();

        cb(null, dataString);//outputs data to callback
    })
};

module.exports = readLessFile;
