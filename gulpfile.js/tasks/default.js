var gulp = require('gulp');

gulp.task('default', ['webpack:watch', 'copy:html', 'sass', 'images', 'svg', 'browserSync', 'watch']);
