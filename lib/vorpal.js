const vorpal = require('vorpal')(),
  dir = require('./directories')
  file = require('./new_file'),
  shell = require('shelljs');

vorpal
  .delimiter('ncg$')
  .show();
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
      this.log('less command works!')
      //gulpfile.compileLess();//from module file

      shell.exec('npm run less')//npm script runs only locally not with cwds;gulpfile removed
      process.exit();
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
      file.create();
      process.exit();
    }else {
      this.log('did not create file')
    }
    cb();
  });

module.exports = {
  test: "vorpal loads!"
}
