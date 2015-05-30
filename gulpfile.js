var gulp = require('gulp');
var typescript = require('gulp-typescript');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var typescriptOptions = require('./config').typescript;

typescriptOptions.es5.typescript = require('typescript');

var CONFIG = {
  src: {
    main: './src/**/*.ts',
    example: './examples/**/*.ts'
  },
  dest: {
    js: {
      dev: {
        es5: 'dist/js/dev/es5'
      }
    }
  }
};



// TRANSPILE TYPESCRIPT
gulp.task('build.src.js', function () {
  gulp.src([CONFIG.src.main, 'typings/**/*.d.ts'])
    .pipe(sourcemaps.init())
    .pipe(typescript(typescriptOptions.es5))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CONFIG.dest.js.dev.es5 + '/src'));
});


gulp.task('build', ['build.src.js']);


// WATCH FILES FOR CHANGES
gulp.task('watch', function () {
  gulp.watch(CONFIG.src.main, ['build']);
});


// WEB SERVER
gulp.task('serve', function () {
  connect.server({
    root: [__dirname, './examples', CONFIG.dest.js.dev.es5],
    port: 8000,
    livereload: false
  });
});


gulp.task('default', ['build', 'serve', 'watch']);
