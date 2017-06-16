* Node CLI for Less

*** Less compiler that runs globally via npm

***** List of tasks for development

- Allow script to run globally - used vorpal and link or use process.argv & switch/case
- Create the following commands: ncg$ <args> [options]
  - -c - current directory
  - -f - choose file extension to compile or default to .less
  - -l - compile .less
- These are the following tasks this script will run
  - read directory from argument or default to cwd
  - read directory files and choose .less file (e.g. main.less or custom.less, etc) to compile
  - read .less file and run it through compiler and autoprefixer
  - write a new file into chosen directory or default to cwd

***** Here is how the commands may run

node app.js arg1 option1 ..

This runs locally. Once linked or installed globally

$ ncg
ncg$ arg1 option1 ...

Using vorpal to create a delimitter or

$ ncg arg1 option1 ... 

Args and options are as follows. To run all from a single command

$ ncg inputFilename directory outputFilename

example:

$ ncg main ~/lessFiles/ main

Using options:

$ ncg main

Run current directory with main.less and main.css. Defaults are main for less and css files and cwd fir directory. Or

4 ncg -d ~/../main

Will output the same 
