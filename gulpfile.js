var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
return gulp.src([
  './assets/styles/app.scss'
])
.pipe(sass({
    includePaths:[
      './bower_components/foundation-sites/scss'
    ]
}))
.pipe(concat('app.css'))
.pipe(gulp.dest('./public/css'));

});

gulp.task('scripts', function(){
    gulp.src([
      './bower_components/jquery/dist/jquery.js',
      './bower_components/foundation-sites/dist/foundation.js',
      './bower_components/foundation-sites/js/foundation.orbit.js',
        './bower_components/foundation-sites/js/foundation.accordion.js',
      './assets/scripts/app.js'

    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'))

    return gulp.src('./bower_components/modernizr/src/Modernizr.js')
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/styles/**/*.scss', ['styles']);
});

gulp.task('default',['styles','scripts']);
