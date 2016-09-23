var gulp = require('gulp');

gulp.task('default', ['clean', 'webpack:watch', 'copy:html', 'sass', 'images', 'browserSync', 'watch']);
