const fs = require('fs');

function readLessFile(filename, directory, cb) {
    directory = directory || process.cwd() + '/';//directory arg or defaults to cwd
    dirAndFile = directory + filename + '.less';//

    let readFile = fs.readFile(dirAndFile, function (err, data) {
        if (err) throw new Error('directory not found');
        //console.log(data.toString());
        let dataString = data.toString();
        return dataString;
        // cb(null, dataString);//outputs data to cb
    })

    console.log(readFile);
};

module.exports = readLessFile;