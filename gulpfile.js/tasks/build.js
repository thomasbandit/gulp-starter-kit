var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence('clean', [
    'webpack:production',
    'sass:production',
    'minify:html',
    'images',
    'svg'
  ], 'inlineSource', callback);
});
