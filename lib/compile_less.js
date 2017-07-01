const fs = require('fs'),
  less = require('less'),
  LessPluginAutoPrefix = require('less-plugin-autoprefix');

function lessCompile(lessData, cb) {
   let autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

  //see for example of less.render https://jsfiddle.net/y0oss091/1/
  less.render(lessData, { plugins: [autoprefixPlugin] })
    .then(function(output) {
      cb(null, output.css);
    },
    function(error){
      return console.error('Could not compile less file. Check it is valid less syntax.');
    }
  );
}//end  readFileandCompile function


module.exports.compile = lessCompile;
