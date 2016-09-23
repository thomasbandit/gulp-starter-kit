var gulp   = require('gulp');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var config = require('../config').html;

gulp.task('copy:html', function() {
   gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream())
    .pipe(notify('HTML Complete'));
})
