/**
* @type      gulp in action
* @file      gulpfile.css
* @author:   by fanyong@gmail.com
* @update:   2015-06-02
*
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var server = require('gulp-server-livereload');

var paths = {
	scripts: ['src/scripts/**/*.js', '!src/scripts/vendor/**/*.js'],
	images: 'src/img/**/*',
	html: 'src/index.html',
	app: 'src/'
};

// Use gulp-stats 
require('gulp-stats')(gulp);


// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`

  console.log('delete');

  del(['build'], cb);
});

gulp.task('scripts', ['clean'], function() {
	// 1. Minify and copy all JavaScript (except vendor scripts)

	var options = {
		// 是否混淆变量名
		mangle: true,
		// 压缩选项
		compress: {
			drop_console: true, // 非常有用，上线前去掉console信息
			drop_debugger: true // 去掉debugger调试语句
		},
		// 是否压缩代码
		output: {
			beautify: false
		}
	};

	return gulp.src(paths.scripts)
		.pipe(uglify(options))
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('build'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.html, ['html']);

});


// See https://github.com/hiddentao/gulp-server-livereload
gulp.task('webserver', function() {
  gulp.src(paths.app)
    .pipe(server({
      livereload: true,
      directoryListing: false,
      defaultFile: 'index.html',
      open: true,
      log: 'debug'
    }));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts']);