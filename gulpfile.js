const gulp = require('gulp')
const gulpScss = require('gulp-sass')
const postcss = require("gulp-postcss")
const gcmq = require('gulp-group-css-media-queries')
const autoprefixer = require("autoprefixer")

const options = {
  // expanded nested compact compressed
  outputStyle: 'compressed'
}

// SCSS to css
function style() {
  return (
    gulp
      .src('src/scss/main.scss')
      .pipe(gulpScss(options)).on("error", gulpScss.logError)
      .pipe(postcss([autoprefixer()]))
      .pipe(gcmq())
      .pipe(gulp.dest('dist'))
  );
}
exports.style = style;

