/**
 * @file
 * Task: Compile:fonts.
 */

/* global module */

module.exports = function (gulp, plugins) {
  'use strict';

  gulp.task('compile:fonts', function () {
    return gulp.src(['images/icons/*.svg'])
    .pipe(plugins.iconfontCss({
      fontName: 'Paychex',
      cssClass: 'picon',
      path: 'includes/templates/font.template.scss',
      targetPath: '../sass/util/_paychex_font.scss',
      fontPath: '../fonts/'
    }))
    .pipe(plugins.iconfont({
      fontName: 'Paychex', // required,
      fontHeight: 1152,
      prependUnicode: false, // recommended option
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
      timestamp: Math.round(Date.now() / 1000) // recommended to get consistent builds when watching files
    }))
    .pipe(gulp.dest('fonts/'));
  });
};
