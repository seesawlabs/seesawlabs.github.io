// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var plumber      = require('gulp-plumber'); // To handle error events
var jshint       = require('gulp-jshint'); // To show JS errors
var cssmin       = require('gulp-cssmin'); // Minify
var sass         = require('gulp-sass'); // Compile our Sass
var sourcemaps   = require('gulp-sourcemaps'); // Sass Sourcemaps
var concat       = require('gulp-concat'); // Concatinate JS
var uglify       = require('gulp-uglify'); // Pass through Uglification
var rename       = require('gulp-rename'); // Rename files after compilation
var autoprefixer = require('gulp-autoprefixer'); // Automatically add CSS prefixes for greater CSS3 browser support
var notify       = require("gulp-notify"); // Ability to send error notifications
var merge        = require('merge-stream'); // Ability to merge multiple scripts in one task

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./scripts/components/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    gulp.src(['./scss/*.scss'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
        }))
        .pipe(plumber())
        .pipe(sass())
        .pipe(cssmin())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./scripts/components/*.js', ['lint', 'scripts']);    
    gulp.watch('./scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'watch']);
