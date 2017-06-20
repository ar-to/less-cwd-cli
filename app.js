#!/usr/bin/env node
const path = require('path'),
  fs = require('fs'),
  cmds = require('./lib/vorpal'),
  dir = require('./lib/directories'),
  file = require('./lib/create_file');



console.log(cmds.test, file.test, dir.test);
console.log(process.cwd());
console.log(process.cwd(__filename) + '/*.less');
