var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    minifyhtml = require('gulp-minify-html'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');;

gulp.task('minifyJS', function() {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyCSS', function() {
  gulp.src('css/*.css')
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('minifyHTML', function() {
  gulp.src('*.html')
  .pipe(minifyhtml({comments: false}))
  .pipe(gulp.dest('dist'));
});

gulp.task('minifyIMG', function() {
  gulp.src('img/*')
  .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
  }))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function() {
  del('dist');
});


// Default Task
gulp.task('default', ['clean', 'minifyJS', 'minifyCSS', 'minifyHTML', 'minifyIMG']);


