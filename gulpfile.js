var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
    return gulp.src("app/styles/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer('last 4 version'))
        .pipe(gulp.dest("public/css/"));
});

gulp.task('css-min', function () {
    return gulp.src("app/styles/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer('last 4 version'))
        .pipe(cssnano({
            zindex: false
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("public/css/"));
});

gulp.task('default', ['css','css-min'], function () {
    gulp.watch(["app/styles/*/*.scss"], ['css','css-min']);
});