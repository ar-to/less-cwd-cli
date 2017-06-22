const vorpal = require('vorpal')(),
  dir = require('./directories'),
  readFile = require('./read_file'),
  lessCompile = require('./compile_less').compile,
  createFile = require('./create_file').createFile,
  shell = require('shelljs');

vorpal
  .command('dir', 'Choose a directory')
  .action(function(args,callback) {
    this.log('Current Directory');
    this.log(dir.cwd);
    callback();
  })

vorpal
  .command('ndir [path] [new]', 'Choose another directory')
  .option('-l, --less', 'Compile Less')
  .option('-w, --watch', 'Watch directory')
  .option('-c --create', 'Create a new file')
  .action(function(args, cb) {
    this.log('vorpal worked!');
    if (args.options.less) {
      this.log('less command works!');
      this.log(createFile);
    } else {
      this.log('not less command')
    }
    if (args.options.watch) {
      this.log('It\'s watching!')
    }else {
      this.log('not watching')
    }
    if (args.options.create) {
      this.log('Created file!')
    }else {
      this.log('did not create file')
    }
    cb();
  });


module.exports = {
  test: "vorpal loads!"
}
