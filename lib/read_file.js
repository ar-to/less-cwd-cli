const fs = require('fs');

function readLessFile(filename, directory, cb) {
    directory = directory || process.cwd() + '/';//directory arg or defaults to cwd
    dirAndFile = directory + filename + '.less';//

    let readFile = fs.readFile(dirAndFile, (err, data) =>{
        //if (err) throw new Error('directory not found');
        try {
            console.log(data.toString());
            let dataString = data.toString();
            cb(null, dataString);//outputs data to cb
        } catch (err) {
            console.log('could not read file')
        }

    })
};
