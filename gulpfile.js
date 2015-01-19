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
  return gulp.src(['js/*.js', 'views/js/*.js'], {base: '.'})
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyIMG', [], function() {
  return gulp.src(['img/*', 'views/images/*'], {base: '.'})
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyCSS', [],  function() {
  return gulp.src(['css/*.css', 'views/css/*.css'], {base: '.'})
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));
});

gulp.task('optimizeHTML', [], function() {
  return gulp.src(['*.html', 'views/*.html'], {base: '.'})
        .pipe(inlinesource())
        .pipe(minifyhtml())
        .pipe(gulp.dest('dist'));
});



// Default Task
gulp.task('default', ['clean', 'optimizeHTML', 'minifyCSS', 'minifyJS', 'minifyIMG']);


