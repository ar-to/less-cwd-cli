const path = require('path'),
  fs = require('fs');

module.exports = {
  test : 'new file loaded!',
  createFile : function(file, content) {
    const writeFileStream = fs.createWriteStream(`${file}.css`);

    writeFileStream.write(content);
    writeFileStream.end();
  }
}
