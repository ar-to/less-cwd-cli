const path = require('path'),
  fs = require('fs');

module.exports = {
  test : 'new file loaded!',
  create : function() {
    fs.writeFile('file.txt', 'New file text', function(err) {
      console.log('Could not create file');
      if (err) throw err;
    });
  }
}
