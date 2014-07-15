var gulp = require('gulp');

gulp.task('build', ['browserify', 'scss', 'images', 'copyhtml']);
