const gulp = require("gulp");
const sass = require("gulp-sass");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const tsify = require('tsify');

let buildDebug = true;

gulp.task("sass", () => gulp.src("Style/**/*.scss")
	.pipe(sass({
		outputStyle: "compressed",
		sourceMapEmbed: buildDebug
	}))
	.pipe(gulp.dest("Build/"))
);

gulp.task("browserify-typescript", () => browserify({ debug: buildDebug })
	.add("Script/Main.ts")
	.plugin(tsify, {
		noImplicitAny: true,
		module: "commonjs",
		moduleResolution: "node",
		target: "es5",
		removeComments: true,
		lib: ["es2015", "dom"]
	})
	.plugin("tinyify")
	.bundle()
	.pipe(source("index.js"))
	.pipe(buffer())
	.pipe(gulp.dest("Build/"))
);

gulp.task("bundle-static", () => gulp.src("Static/**/*")
	.pipe(gulp.dest("Build"))
);

gulp.task("debug", (done) => {
	buildDebug = true;
	gulp.series("sass", "browserify-typescript", "bundle-static")();
	if(done) done();
});

gulp.task("release", (done) => {
	buildDebug = false;
	gulp.series("sass", "browserify-typescript", "bundle-static")();
	if(done) done();
});

gulp.task("watch", () => {
	gulp.task("debug")();
	gulp.watch("Style/**/*.scss", { usePolling: true }, gulp.task("sass"));
	gulp.watch("Script/**/*.ts", { usePolling: true }, gulp.series("browserify-typescript"));
	gulp.watch("Static/**/*", { usePolling: true }, gulp.task("bundle-static"));
});