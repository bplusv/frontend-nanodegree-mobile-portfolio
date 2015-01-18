var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    minifyhtml = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    inlinesource = require('gulp-inline-source');

gulp.task('clean', [], function() {
  return del('dist');
});

gulp.task('minifyJS', [], function() {
  return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyIMG', [], function() {
  return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('minifyCSS', [],  function() {
  return gulp.src('css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('inlineCSS', [], function() {
  return gulp.src('*.html')
        .pipe(inlinesource())
        .pipe(minifyhtml())
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyHTML', ['inlineCSS'], function() {
  return gulp.src('dist/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest('dist'));
});



// Default Task
gulp.task('default', ['clean', 'minifyHTML', 'minifyCSS', 'minifyJS', 'minifyIMG']);


