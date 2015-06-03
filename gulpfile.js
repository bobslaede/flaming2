var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

gulp.task('build:html', function() {
    
    var assets = useref.assets();
    
    return gulp.src('src/index.html')
        .pipe(vulcanize())
        .pipe(assets)
      //  .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'))
})