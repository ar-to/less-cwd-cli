#!/usr/bin/env node
const path = require('path'),
  fs = require('fs'),
  vorpal = require('vorpal')(),
  readLessFile = require('./lib/read_file'),
  // cmds = require('./lib/vorpal'),
  // dir = require('./lib/directories'),
  lessCompile = require('./lib/compile_less').compile,
  createFile = require('./lib/create_file').createFile;



//console.log(cmds.test, file.test, dir.test);//vorpal loads! new file loaded! directories loaded!
console.log('' + process.cwd());///Users/ari/repos/node-less-cli
console.log(process.cwd(__filename) + '/*.less');///Users/ari/repos/node-less-cli/*.less



vorpal
  .delimiter('ncg$')
  .show();


vorpal
  .command('less [filename] [dir]', 'Choose directory & filename.less to compile. Detaults to cwd')
  .option('-c --currentDir', 'Create a new file')
  .action(function(args, cb) {
    if (args.filename) {
      readLessFile(args.filename, args.dir);
    }
    if(args.options.currentDir) {
      readAndCompileToCss(args.filename, args.dir);
    }

    cb();
  })

function readAndCompileToCss(file, dir) {
  readLessFile(file, dir, function (err, dataString) {
    if (err) return console.log(err);
    //console.log(dataString);
    compileCss(dataString);
  });//end readLessFile
}

function compileCss(para) {
  return console.log(`${para} is the data from first function`);
}