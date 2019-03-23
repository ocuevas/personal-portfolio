const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

function style() {
    return (
        gulp.src('assets/scss/main.scss')

        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }) )
        .pipe(sass({
            includePaths: ['sass']
        }))
        .pipe(gulp.dest('assets/css'))
    );
}

exports.style = style;

function watch() {
    gulp.watch(['assets/scss/*.scss'], style);
}

exports.watch = watch;