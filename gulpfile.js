const gulp = require('gulp')
	browserSync = require('browser-sync').create();

const config = {
	siteRoot: './_site',
}

gulp.task('default', ['serve']);

gulp.task('serve', () => {
  browserSync.init({
    files: [config.siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: config.siteRoot
    }
  });
  
});