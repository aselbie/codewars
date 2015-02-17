var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha', function() {
  return gulp.src(['*Test.js'], { read: false })
    .pipe(mocha())
});

gulp.task('default', function() {
  gulp.watch(['*.js'], ['mocha']);
});