const gulp = require('gulp');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compressImg () {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function compressJS(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function () {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false},  gulp.series(compressJS));
    gulp.watch('./source/images/*', {ignoreInitial: false},  gulp.series(compressImg));
}