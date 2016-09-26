var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var config   = require('../config').svg;

gulp.task('svg', function() {
  return gulp.src(config.src)
    .pipe(imagemin({
      svgoPlugins: [
        {removeTitle: true}
      ]
    }))
    .pipe(svgstore())
    .pipe(gulp.dest(config.dest));
});
