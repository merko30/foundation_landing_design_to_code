var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("default", async function() {
  gulp
    .src("assets/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
});
