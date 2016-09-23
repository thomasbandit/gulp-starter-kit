var gulp          = require('gulp');
var webpack       = require('webpack');
var gutil         = require('gulp-util');
var notifier      = require('gulp-notify/node_modules/node-notifier');
var browserSync   = require('browser-sync');
var config        = require('../../webpack/dev.config');

var webpackInit = false;
var statsLog = {
  colors: true,
  reasons: true
};

gulp.task('webpack:watch', function(callback) {
  function onComplete(error, stats) {
    webpackInit = true;

    if (error) { // fatal error
      onError(error);
    } else if (stats.hasErrors()) { // soft error
      onError(stats.toString(statsLog));
    } else {
      onSuccess(stats.toString(statsLog));
    }
  }

  function onError(error) {
    var formatedError = new gutil.PluginError('webpack', error);

    notifier.notify({
      title: 'Error: ' + formatedError.plugin,
      message: formatedError.message
    });

    callback(formatedError);
  }

  function onSuccess(detailInfo) {
    notifier.notify({
      title: 'Webpack',
      message: 'Webpack complete'
    });

    gutil.log('[webpack]', detailInfo);
    browserSync.reload();

    if (!webpackInit) {
      callback();
    }
  }

  webpack(config).watch(200, onComplete);
});
