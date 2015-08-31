'use strict';

console.log(require.config);

require.config({

	// 非AMD模块的js使用shim配置导出
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	},

	// 根据路径定义别名 alias
	paths: {
		jquery: 'vendor/jquery',
		underscore: 'vendor/underscore',
		backbone: 'vendor/backbone'
	}
});


require(['test'], function(TEST) {
	console.log(TEST.a);
});