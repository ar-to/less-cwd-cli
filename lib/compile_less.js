const fs = require('fs'),
  less = require('less'),
  LessPluginAutoPrefix = require('less-plugin-autoprefix');

const createFile = require('./create_file').createFile;

function lessCompile() {

//   console.log('function works!');

//   let lessDir = process.cwd() + '/*.less';

//   let src = "./file.less";
//   let srcContent = fs.readFileSync(src).toString();//reads and prints file as text
//   let cwdContent = process.cwd() + '/file.less';
//   let cwdRead = fs.readFileSync(cwdContent).toString();//reads and prints directory as text

//   let less_css = "@background: #000; body{background:@background; transform: rotate(30deg);display: flex} ";
//   let autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
  
  //compiles less string form less_css
  // less.render(less_css, { plugins: [autoprefixPlugin] })
  //   .then(function(output) {
  //     console.log(`this is less: ${less_css}`);
  //     console.log('this is css:');
  //     console.log(output.css);
  //   },
  //   function(error){}
  // );
  
  //see for example of less.render https://jsfiddle.net/y0oss091/1/
  //compiles form ./file.less
//   less.render(srcContent, { plugins: [autoprefixPlugin] })
//     .then(function(output) {
//       console.log(`this is less: ${src}`);
//       console.log('this is css:');
//       console.log(output.css);
//       createFile(output.css);
//     },
//     function(error){}
//   );
}//end  readFileandCompile function


module.exports.compile = lessCompile;
