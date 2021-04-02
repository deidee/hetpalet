
'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const jsonImporter = require('node-sass-json-importer');

sass.compiler = require('node-sass');

gulp.task('render', function () {
    return gulp.src('./src/test.scss')
        .pipe(sass({importer: jsonImporter(), includePaths: ['node_modules'], outputStyle: 'expanded'}))
        .pipe(gulp.dest('./src'));
});

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({includePaths: ['node_modules'], outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css'))
        .pipe(sass({includePaths: ['node_modules'], outputStyle: 'compressed'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass'));
