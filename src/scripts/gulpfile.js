const gulp = require('gulp');

gulp.task('copy-bootstrap-js', function() {
  return gulp.src('../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(gulp.dest('.'));
});

exports.default = gulp.series('copy-bootstrap-js');