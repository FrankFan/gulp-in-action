/**
* @type      gulp demo
* @file      gulpfile.js
* @author:   by fanyong@gmail.com
* @update:   2015-09-06
*
*/

var gulp = require('gulp');
var del  = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');

// 定义全局路径
var paths = {
	scripts: ['src/scripts/**/*.js', '!src/scripts/vendor/**/*.js'],
	images: 'src/img/**/*',
	html: 'src/index.html',
	root: 'src/',
	outputPath: 'build'
};

// 删除outputPath目录
gulp.task('clean', function() {
	del([paths.outputPath]);
});

// js 压缩&合并
gulp.task('scripts', ['clean'], function() {
	// 1.压缩js
	// 2.合并js到 build 目录下的 all.min.js 文件

	var options = {
		// 是否混淆变量名
		mangle: true,
		// 压缩选项
		compress: {
			drop_console: true, // 非常有用，上线前去掉console信息
			drop_debugger: true // 去掉debugger调试语句
		},
		// 是否不压缩(beautify)代码
		output: {
			beautify: false
		}
	};

	return gulp.src(paths.scripts)
		.pipe(uglify(options))
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest(paths.outputPath));
});

// watch
gulp.task('watch', function() {

	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.html, ['html']);

});

// See https://github.com/hiddentao/gulp-server-livereload
gulp.task('server', function() {
  gulp.src(paths.root)
    .pipe(server({
      livereload: true,
      directoryListing: false,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});

gulp.task('default', function() {
	console.log('这个默认的task, 循环10次');
	for(var i = 0; i<10; i++) {
		console.log(i);
	}
});


// 统计task的插件
require('gulp-stats')(gulp);