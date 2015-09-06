/**
* @type      gulp demo
* @file      gulpfile.js
* @author:   by fanyong@gmail.com
* @update:   2015-09-06
*
*/

var gulp = require('gulp');


gulp.task('default', function() {
	console.log('这个默认的task, 负责循环10次');
	for(var i = 0; i<1000; i++) {
		console.log(i);
	}
});


// 统计task的插件
require('gulp-stats')(gulp);