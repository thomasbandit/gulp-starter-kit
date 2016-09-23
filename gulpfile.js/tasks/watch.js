var gulp   = require('gulp');
var watch  = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function() {
  watch(config.html.src, function() {
    gulp.start('copy:html');
  });

  watch(config.images.src, function() {
    gulp.start('images');
  });

	watch(config.sass.watchSrc, function() {
    gulp.start('sass');
  });
});
