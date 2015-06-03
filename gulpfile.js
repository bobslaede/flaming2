var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('build:html', function() {
    return gulp.src('src/index.html')
        .pipe(vulcanize())
        .pipe(gulp.dest('dist'))
})