var gulp = require("gulp");
/*---- plugins ----*/
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var notify = require("gulp-notify");
var browserSync = require("browser-sync").create();

/*---- constants ----*/
var JS_DISTRIBUTION_FOLDER = "./dist/js";
var CSS_DISTRIBUTION_FOLDER = "./dist/css";
var THIRD_PARTY_CSS = [
  /*Example*/  //  './node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
];
var CUSTOM_CSS = ["./src/scss/app.scss"];
var THIRD_PARTY_JS = [
  /*Example*/ //'./node_modules/jquery/dist/jquery.min.js'
];
var CUSTOM_JS = ["./src/js/**/*.js"];

gulp.task("browser-sync", ["styles"], function() {
    browserSync.init({
        server: {
            injectChanges: true,
            baseDir: "./"
        }
    });
});

gulp.task("styles", function() {
    var sequentialCSS = THIRD_PARTY_CSS.concat(CUSTOM_CSS);
    return gulp.src(sequentialCSS)
       .pipe(sass().on("error", sass.logError))
       .pipe(concat("app.css"))
       .pipe(autoprefixer({
           browsers: ["> 1%", "iOS 7", "ie >= 10"],
           cascade: false
       }))
       .pipe(gulp.dest(CSS_DISTRIBUTION_FOLDER))
       .pipe(rename("app.min.css"))
       .pipe(cssnano())
       .pipe(gulp.dest(CSS_DISTRIBUTION_FOLDER))
       .pipe(browserSync.reload({stream: true}))
       .pipe(notify({
           message: "app.min.css is ready!"
       }));
});

gulp.task("watch", ["browser-sync"], function() {
    gulp.watch("./src/scss/**/*.scss", ["styles"]).on("change", browserSync.reload);
    gulp.watch("./src/js/**/*.js", ["scripts"]).on("change", browserSync.reload);
    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("scripts", function() {
    var sequentialJS = THIRD_PARTY_JS.concat(CUSTOM_JS);
    return gulp.src(sequentialJS)
       .pipe(concat("app.js"))
       .pipe(gulp.dest(JS_DISTRIBUTION_FOLDER))
       .pipe(rename("app.min.js"))
       .pipe(uglify({
           mangle: true
       }))
       .pipe(gulp.dest(JS_DISTRIBUTION_FOLDER))
       .pipe(notify({
           message: "app.min.js is ready!"
       }));
});

gulp.task("default", ["styles", "scripts", "watch"]);
