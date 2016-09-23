var gulp         = require('gulp');
var inlinesource = require('gulp-inline-source');
var config       = require('../config').html;

gulp.task('inlineSource', function() {
  return gulp.src(config.dest + '/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest(config.dest));
});
