var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch('src/scss/**', ['scss']);
    gulp.watch('src/img/**', ['img']);
    gulp.watch('src/html/**', ['copyhtml']);
    // Note: The browserify task handles js recompiling with watchify
});
