#!/usr/bin/env node
const path = require('path'),
  fs = require('fs'),
  cmds = require('./lib/vorpal'),
  dir = require('./lib/directories'),
  file = require('./lib/new_file');
  //command = require('./lib/commands');



console.log(cmds.test, file.test, dir.test);
console.log(process.cwd());
console.log(process.cwd(__filename) + '/*.less');
