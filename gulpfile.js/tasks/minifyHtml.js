var gulp    = require('gulp');
var notify  = require('gulp-notify');
var htmlmin = require('gulp-htmlmin');
var config  = require('../config').html;

gulp.task('minify:html', function() {
  return gulp.src(config.src)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.dest))
    .pipe(notify('HTML Minfied'));
});
