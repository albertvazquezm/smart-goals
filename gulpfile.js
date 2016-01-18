var browserify = require('browserify');
var gulp = require('gulp');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
 
gulp.task('browserify', function() {
    return browserify('app/index.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*', ['browserify', 'reload']);
});

gulp.task('reload', function(){
    connect.reload()
});

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('dev', ['browserify', 'watch', 'webserver']);

