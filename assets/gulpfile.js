//include gulp

var gulp = require('gulp');

//plugins

var minify_css = require('gulp-mini-css');
var concat_js = require('gulp-concat');
var uglyfy = require('gulp-uglify');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');


//task
gulp.task('html', function () {
    return gulp.src('./*.html')
            .pipe(livereload());
});


gulp.task('compile-css', function () {
    return gulp.src('src/css/*.css')
            .pipe(minify_css({ext: '-min.css'}))
            .pipe(autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload());
});

gulp.task('concatination', function () {
    return gulp.src('src/js/*.js')
            .pipe(concat_js('merge.js'))
            .pipe(uglyfy())
            .pipe(gulp.dest('dist/js'))
            .pipe(livereload());
});

gulp.task('image_compress', function () {
    return gulp.src('src/images/*')
            .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
            .pipe(gulp.dest('dist/images'));
});

gulp.task('watcher', function () {
    livereload.listen();

    gulp.watch('./*.html', ['html']);
    gulp.watch('src/css/*.css', ['compile-css']);
    gulp.watch('src/js/*.js', ['concatination']);
    gulp.watch('src/images/*', ['image_compress']);
});

gulp.task('default', ['watcher']);