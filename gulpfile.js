'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('html', function () {
	return gulp.src('./post/*.html')
		.pipe(gulp.dest('/var/vagrant/php55/www/arschool.tech/wordpress/tool/page'))
	;
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});


gulp.task('sass_local', function () {
	return gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(gulp.dest('/var/vagrant/php55/www/arschool.tech/wordpress/wp-content/themes/engrave-lite'))
        ;
});

gulp.task('sass_local:watch', function () {
	gulp.watch('./sass/*.scss', ['sass_local']);
	gulp.watch('./post/*.html', ['html']);
});
