# Node CLI for Less

Simple Less compiler for your current working directory that runs globally

## Installation:

clone repo and move into the folder
```
$ git clone https://github.com/ar-to/node-less-cli.git
$ cd node-less-cli
```
Install module globally
```
$ npm i -g 
```

## Usage

Move into any directory and run `lcc` to start command prompt
```
$ lcc
Please choose a fileName with extension [.less] to compile. Use help command for possible commands.
lcc$ less main
```
This compiles and creates a new css file inside the current working directory form the source file main.less.

#### Commands

Available commands:
```
lcc$ help

  Commands:

    help [command...]                                    Provides help for a given command.
    exit                                                 Exits application.
    less [options] [filename] [sourceDir] [cssFileName]  Choose directory & filename.less to compile. Detaults to cwd

lcc$ 
```
Available options
```
lcc$ less --help

  Usage: less [options] [filename] [sourceDir] [cssFileName]

  Choose directory & filename.less to compile. Detaults to cwd

  Options:

    --help        output usage information
    -d --default  Uses default values [lessMain, ./ , cssMain]

lcc$ 
```
Default values as of version 0.1.0 are **[lessMain, ./ , cssMain]**

## Future Features

* Add watch functionality for current working directory 
* Add command argument to specify output css file directory other than  current working directory
* Add config.json option for changing default values when running `lcc$ less -d`

