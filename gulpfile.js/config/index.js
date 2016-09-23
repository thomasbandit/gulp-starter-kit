var SRC_DIR = './src';
var BUILD_DIR = './build';

var config = {
  baseDir: {
    build: BUILD_DIR,
    src: SRC_DIR
  },
  browserSync: {
    src: BUILD_DIR
  },
  html: {
    src: SRC_DIR + '/**/*.html',
    dest: BUILD_DIR
  },
	images: {
		src: SRC_DIR + '/img/**/*.{gif,jpg,png}',
		dest: BUILD_DIR + '/assets/img'
	},
  sass: {
    watchSrc: SRC_DIR + '/scss/**/*.scss',
    src: SRC_DIR + '/scss/style.scss',
    dest: BUILD_DIR + '/assets/css',
    settings: {
      outputStyle: 'compressed'
    }
  }
};

module.exports = config;
