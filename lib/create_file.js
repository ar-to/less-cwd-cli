const path = require('path'),
  fs = require('fs');

module.exports = {
  test : 'new file loaded!',
  createFile : function(filename, content) {
      filename = filename || 'cssFileName';
      content = content.toString();

      try {
        const writeFileStream = fs.createWriteStream(`${filename}.css`);//works

        writeFileStream.write(content);
        writeFileStream.end();
        console.log('cssFileName.css created in current directory.');
      }
      catch (err) {
        console.error('Could not create file');
      }


  }
}
