/// <binding AfterBuild='build' Clean='build:clean' />
var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var tsify = require('tsify');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('build:clean', function () {
    return gulp.src('dist')
        .pipe(clean());
})

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

gulp.task('build:css', function () {

    return gulp.src('src/styles/*.less')
        .pipe(less({
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/styles'))

});

gulp.task('build:js', function () {
    var b = browserify({
        debug: false,
        paths: ['src']
    });

    return b
        .add('src/init.ts')
        .plugin('tsify')
        .bundle()
        .pipe(source('init.js'))
        .pipe(buffer())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dist'))

})

gulp.task('build', function (done) {
    runSequence('build:clean', 'build:js', 'build:html', 'build:css', done);
})