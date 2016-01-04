var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true

  });
});

gulp.task('styles', function() {
  return gulp.src([
      './assets/styles/*.scss'
    ])
    .pipe(sass({
      includePaths: [
        './bower_components/foundation-sites/scss',
        './bower_components/motion-ui'
      ]
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./public/css'));

});

gulp.task('livereload', function() {
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src([

      './bower_components/foundation-sites/dist/foundation.js',
      './bower_components/foundation-sites/js/*/*.js',
      './bower_components/cesar/cesar.js',
      './assets/scripts/app.js'

    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'))

  return gulp.src('./bower_components/modernizr/src/Modernizr.js')
    .pipe(gulp.dest('./public/js'));

});

gulp.task('watch', function() {
  gulp.watch('./assets/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'scripts']);
