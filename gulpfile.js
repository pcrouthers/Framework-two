var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');


var paths = {
  'bower': './bower_components',
  'assets': './assets',
  'public' : './public'
};


gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true

  });
});

gulp.task('styles', function() {
  return gulp.src([
      paths.assets + '/styles/*.scss'
    ])
    .pipe(sass({
      includePaths: [
        paths.bower + '/foundation-sites/scss',
        paths.bower + '/motion-ui'
      ]
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(paths.public + '/css'));

});

gulp.task('livereload', function() {
  gulp.src(paths.public + '/**/*')
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src([

      paths.bower + '/foundation-sites/dist/foundation.js',
      paths.bower + '/foundation-sites/js/*/*.js',
      paths.bower + '/cesar/cesar.js',
      paths.bower + '/slippry/slippry.js',
      paths.bower + '/masonry-layout/masonry.min.js',
      paths.assets + '/scripts/app.js'

    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.public + '/js'))

  return gulp.src(paths.bower + '/modernizr/src/Modernizr.js')
    .pipe(gulp.dest(paths.public + '/js'));

});

gulp.task('watch', function() {
  gulp.watch(paths.assets + '/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'livereload']);
