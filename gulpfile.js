var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");
var less = require("gulp-less");
var minifyCss = require("gulp-minify-css");
 
// task
gulp.task('minify-html', function () {
    gulp.src('./public/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('./build'));//fichier d'arrivé
});
// task
gulp.task('compile-less', function () {
    gulp.src('./less/*.less') // path to your file
    .pipe(less())
    .pipe(gulp.dest('build/css'));//fichier d'arrivé
});

// task
gulp.task('minify-css', function () {
    gulp.src('build/css/style.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});