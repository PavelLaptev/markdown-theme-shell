const gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    pug = require("gulp-pug"),
    browserSync = require("browser-sync").create(),
    webpack = require("webpack"),
    gulpWebpack = require("webpack-stream");

gulp.task("gulp-webpack", function() {
    return gulp
        .src(["app/js/main.js"])
        .pipe(
            gulpWebpack(
                {
                    entry: {
                        app: "./app/scripts/main.js"
                    },
                    output: {
                        filename: "main.bundle.js"
                    },
                    mode: "production"
                },
                webpack
            )
        )
        .pipe(gulp.dest("public/js"));
});

gulp.task("stylus", function() {
    return gulp
        .src(["./app/styl/*.styl", "./app/styl/themes/themes.styl"])
        .pipe(stylus())
        .pipe(gulp.dest("./public/css/"));
});

gulp.task("pug", function buildHTML() {
    return gulp
        .src("app/*.pug")
        .pipe(
            pug({
                pretty: true,
                comments: true
            })
        )
        .pipe(gulp.dest("public"));
});

gulp.task("serve", ["stylus"], function() {
    browserSync.init({
        open: false,
        server: "./public"
    });

    gulp.watch(
        [
            "./app/styl/*.styl",
            "./app/styl/helpers/*.styl",
            "./app/styl/components/*.styl",
            "./app/styl/themes/*.styl"
        ],
        ["stylus"]
    ).on("change", browserSync.reload);

    gulp.watch(
        [
            "app/scripts/*.js",
            "app/scripts/utils/*.js",
            "app/scripts/parser-utils/*.js"
        ],
        ["gulp-webpack"]
    ).on("change", browserSync.reload);

    gulp.watch("app/*.pug", ["pug"]).on("change", browserSync.reload);

    gulp.watch("public/*.md").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
