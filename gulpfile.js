var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Get one .styl file and render
gulp.task('default', function () {
  var processors = [
    autoprefixer(),
    // autoprefixer({browsers: ['last 1 versions']}),
    cssnano(),
  ];
  return gulp.src('./src/flex-attributes.styl')
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./'));
});
