#!/usr/bin/env node
const path = require('path'),
  fs = require('fs'),
  vorpal = require('vorpal')(),
  readLessFile = require('./lib/read_file'),
  lessCompile = require('./lib/compile_less').compile,
  createFile = require('./lib/create_file').createFile;

console.log('Please choose a fileName with extension [.less] to compile. Use help command for possible commands.');

vorpal
  .delimiter('lcc$')
  .show();

vorpal
  .command('less [filename] [sourceDir] [cssFileName]', 'Choose directory & filename.less to compile. Detaults to cwd')
  .option('-d --default', 'Uses default values [lessMain, ./ , cssMain]')
  .action(function(args, cb) {
    if (args.filename) {
      readAndCompileToCss(args.filename, args.sourceDir, args.cssFileName);
    }
    if (args.options.default) {
      readAndCompileToCss(args.filename, args.sourceDir, args.cssFileName);
    }

    cb();
  })

function readAndCompileToCss(lessFileLess, sourceDir, cssFileName) {
    readLessFile(lessFileLess, sourceDir, function (err, dataString) {
      if (err) return console.log(err.message);
        //console.log(`This is your file content: ${dataString}`);

      lessCompile(dataString, function(err, cssData) {
          //console.log('this is the css data as string:' + ' ' + cssData.toString());
        createFile(cssFileName, cssData);
      });//end lessCompile
    });//end readLessFile
}//end readAndCompileToCss
