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
    // if(args.dir && args.filename) {
    //   readFile(args.filename, args.dir);//reads cwd + file.less then compiles
    //   //createFile.create(args.file,args.content)//creates filename.css; callback from readFileandCompile
    // } else if (args.dir == undefined ) {
    //   readFile(args.filename);
    // }

    if(args.options.currentDir) {
      readAndCompileToCss(args.filename, args.dir);
    }

    cb();
  })

function readAndCompileToCss(file, dir) {
  readCss(file, dir, function readCssCb(err, dataString) {
    if (err) return console.log(err);

    compileCss(dataString, function (err, dataCss) {
      printToFile(dataCss);
    });

  cb1Test(null, file + dir);



  // if (typeof cb1 && cb2 && cb3 === 'function'){
  //   cb1(null, file + dir);
  //   // cb2Test();
  //   // cb3Test();
  // }

  // cb1Test(null, file + dir);
  //return console.log('main function works')
  });
}

function readCss(file, dir, cb) {
  if (!file) return cb('give me a file');
  if (!dir) return cb('no dir');

  let dataString = "cb1test Output";

  cb(null, dataString);
}

  //   function cb2Test(err,dirr, cb) {
  //   console.log('cb2 works' + drr);
  // }

  //   function cb3Test(err, dir) {
  //   console.log('cb1 works' + file + dir);
  // }