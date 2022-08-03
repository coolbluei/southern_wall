/**
 * @file
 * Task: Compile: JavaScript.
 */

/* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';

  gulp.task('compile:js', function () {
    return gulp.src([
      options.js.vendorfiles, options.js.files
    ])
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('paychex.min.js'))
      .pipe(plugins.sourcemaps.write())
      .pipe(plugins.plumber.stop())
      .pipe(plugins.uglify())
      .pipe(gulp.dest(options.js.destination));
  });
};
