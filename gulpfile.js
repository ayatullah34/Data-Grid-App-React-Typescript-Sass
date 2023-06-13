
const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(dartSass);

gulp.task('css', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('src/dist/css'))
});

gulp.task('watch', () => {
    gulp.watch("src/sass/**/*.scss", gulp.task('css'));
});

gulp.task('default',gulp.parallel( 'css', 'watch'));

