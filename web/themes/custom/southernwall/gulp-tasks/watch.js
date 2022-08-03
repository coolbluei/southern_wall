/**
 * @file
 * Task: Watch.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';

  gulp.task('watch', ['watch:sass', 'watch:styleguide', 'watch:js']);

  /* will work on adding lint stuff, there are some code syntax that I want to update
  gulp.task('watch:js', function () {
    return gulp.watch([
      options.js.files
    ], function () {
      plugins.runSequence(
        'lint:js',
        'lint:css',
        'browser-sync:reload'
      );
    });
  });
*/

  gulp.task('watch:dev', function () {
    return gulp.watch([
      options.sass.files,
      options.js.files,
    ], function () {
      plugins.runSequence(
        'compile:sass', 
        'compile:js',
        // 'minify:css',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:sass', function () {
    return gulp.watch([
      options.sass.files,
      //options.js.files,
    ], function () {
      plugins.runSequence(
        'compile:sass', 
        // 'minify:css',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:js', function () {
    return gulp.watch([
      options.js.files,
    ], function () {
      plugins.runSequence(
        'compile:js',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:styleguide', function () {
    return gulp.watch([
      options.sass.files
    ], function () {
      plugins.runSequence(
        'compile:styleguide'
      );
    });
  });
};
