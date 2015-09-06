# gulp-in-action
learn how to play with gulp 


## prepare & install

`gulp`和`grunt`类似，一些插件的用法也有些相似。想学习`grunt`的同学可以移步至[这里](https://github.com/FrankFan/grunt-from-zero-2-hero)

使用`gulp`之前需要在安装：

- node
- npm
- gulp

## config
参考`gulpfile.js`文件


## gulp的5个API
`gulp`提供了流式操作和基本的任务系统，只需要学习5个函数即可。

### gulp.task(name[, deps], fn)
It registers the function with a name.

You can optionally specify some dependencies if other tasks need to run first.

### gulp.run(tasks...)
Runs all tasks with maximum concurrency

### gulp.watch(glob, fn)
Runs a function when a file that matches the glob changes

Included in core for simplicity

### gulp.src(glob)
This returns a readable stream.

Takes a file system glob (like grunt) and starts emitting files that match.

This is piped to other streams

###gulp.dest(folder)
This returns a writable stream

File objects piped to this are saved to the file system

Congratulations
You are now a gulp expert.

参考：
![gulp API](https://github.com/gulpjs/gulp/blob/master/docs%2FAPI.md)
![http://slides.com/contra/gulp](http://slides.com/contra/gulp)

##  插件

### `webserver`