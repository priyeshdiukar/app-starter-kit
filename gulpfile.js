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
var reload = browserSync.reload;
var eslint = require("gulp-eslint");
var scsslint = require("gulp-scss-lint");

/*---- Routes ----*/
var routes = {
    jsDistribution: "./dist/js",
    cssDistribution: "./dist/css",
    vendorCss: [
    /*Example*/  //  './node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
    ],
    customCss: ["./src/scss/app.scss"],
    vendorJs : [
    /*Example*/ //'./node_modules/jquery/dist/jquery.min.js'
    ],
    customJs: ["./src/js/**/*.js"]
};

gulp.task("serve", ["styles"], function() {
    browserSync.init({
        server: {
            injectChanges: true,
            baseDir: "./"
        }
    });
});

gulp.task("watch", ["serve"], function() {
    gulp.watch("./src/scss/**/*.scss", ["scss-lint","styles"]);
    gulp.watch("./src/js/**/*.js", [["js-lint"],"scripts"]).on("change", reload);
    gulp.watch("*.html").on("change", reload);
});

gulp.task("scripts", function() {
    var sequentialJS = routes.vendorJs.concat(routes.customJs);
    return gulp.src(sequentialJS)
       .pipe(concat("app.js"))
       .pipe(gulp.dest(routes.jsDistribution))
       .pipe(rename("app.min.js"))
       .pipe(uglify({
           mangle: true
       }))
       .pipe(gulp.dest(routes.jsDistribution))
       .pipe(notify({
           message: "app.min.js is ready!"
       }));
});

gulp.task("styles", function() {
    var sequentialCSS = routes.vendorCss.concat(routes.customCss);
    return gulp.src(sequentialCSS)
       .pipe(sass().on("error", sass.logError))
       .pipe(concat("app.css"))
       .pipe(autoprefixer({
           browsers: ["> 1%", "iOS 7", "ie >= 10"],
           cascade: false
       }))
       .pipe(gulp.dest(routes.cssDistribution))
       .pipe(rename("app.min.css"))
       .pipe(cssnano())
       .pipe(gulp.dest(routes.cssDistribution))
       .pipe(browserSync.reload({stream: true}))
       .pipe(notify({
           message: "app.min.css is ready!"
       }));
});

gulp.task("js-lint", function() {
    return gulp.src(["./src/js/**/*.js","!node_modules/**"])
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format());
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        //.pipe(eslint.failAfterError());
});

gulp.task("scss-lint", function() {
    return gulp.src("./src/scss/*.scss")
    .pipe(scsslint());
});

gulp.task("default", ["scripts", "styles", "js-lint", "scss-lint",  "watch"]);
