var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

gulp.task('build:html', function() {
    
    var assets = useref.assets();
    
    return gulp.src('src/index.html')
        .pipe(assets)
      //  .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'))

})

gulp.task('build:elements', function () {
    return gulp.src('src/elements/elements.html')
        .pipe(vulcanize())
        .pipe(gulp.dest('dist/elements'))
})

gulp.task('build:css', function () {

    return gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))

})