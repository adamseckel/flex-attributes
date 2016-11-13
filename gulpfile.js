var gulp = require('gulp');
var stylus = require('gulp-stylus');

// Get one .styl file and render
gulp.task('build', function () {
  return gulp.src('./src/flex-attributes.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./'));
});
