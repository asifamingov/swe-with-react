var gulp = require("gulp");
var mustache = require("gulp-mustache");


gulp.task('build-swe', function () {
    gulp.src("index.html")
        .pipe(mustache())
        .pipe(gulp.dest("./public"));
});
