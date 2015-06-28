var gulp = require('gulp');
var mocha = require('gulp-mocha');

// Compiler for React tests
require('./test/compiler.js');

gulp.task('mocha', function() {
  return gulp
    .src('./test/*.js', { read: false })
    .pipe(mocha());
});

gulp.task('default', [
  'mocha'
]);
