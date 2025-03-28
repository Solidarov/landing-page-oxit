const gulp = require('gulp');

gulp.task('copy-bootstrap-js', function() {
  return gulp.src('../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(gulp.dest('.'));
});
gulp.task('copy-swiper-js', function() {
  return gulp.src('../../node_modules/swiper/swiper-bundle.min.js')
    .pipe(gulp.dest('.'));
});

gulp.task('copy-swiper-css', function() {
  return gulp.src('../../node_modules/swiper/swiper-bundle.min.css')
    .pipe(gulp.dest('../styles'));
});
exports.default = gulp.series('copy-bootstrap-js', 'copy-swiper-js', 'copy-swiper-css');