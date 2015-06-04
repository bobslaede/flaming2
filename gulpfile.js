var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var tsify = require('tsify');
var debowerify = require('debowerify');
var bowerResolve = require('bower-resolve');


gulp.task('build:html', function() {
    
    var assets = useref.assets();
    
    return gulp.src('src/index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(htmlreplace({
            init: {
                src: 'init.js',
                tpl: '<script src="%s"></script>'
            }
        }))
        .pipe(gulp.dest('dist'))

});

gulp.task('build:elements', function () {
    return gulp.src('src/elements/elements.html')
        .pipe(vulcanize())
        .pipe(gulp.dest('dist/elements'))
});

gulp.task('build:css', function () {

    return gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))

});

gulp.task('build:js', function () {
    var b = browserify({
        debug: false
    });

    return b
        .plugin('tsify', { module: 'commonjs'})
        .add('src/init.ts')
        .bundle()
        .pipe(source('init.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist'))

})