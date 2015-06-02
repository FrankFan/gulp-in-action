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

var paths = {
	scripts: ['src/scripts/**/*.js', '!src/scripts/external/**/*.js'],
	images: 'src/img/**/*'
};


// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});

gulp.task('scripts', ['clean'], function() {
	// 1. Minify and copy all JavaScript (except vendor scripts)

	var options = {
		mangle: true,
		compress: {
			drop_console: true,
			drop_debugger: true
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
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts']);