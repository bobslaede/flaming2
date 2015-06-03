var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var htmlreplace = require('gulp-html-replace');

gulp.task('build:html', function() {
    return gulp.src('src/index.html')
        .pipe(vulcanize())
        .pipe(htmlreplace({
            js: {
                src: null
            }
        }))
        .pipe(gulp.dest('dist'))
})