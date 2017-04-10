'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync'); // 本地服务

// The static server
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath: "/src/index.html"
    });
    gulp.watch("src/index.html").on('change', browserSync.reload);
});

gulp.task('default', function(){
    gulp.start('serve');
});


