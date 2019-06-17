const gulp = require('gulp');
const sass = require('gulp-sass');
const tsc = require('gulp-typescript');
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");


gulp.task('build-sass', () => gulp.src('src_style/*.scss')
	.pipe(sass({
		outputStyle: "compressed",
		sourceMapEmbed: true
	}))
	.pipe(gulp.dest("./"))
);

const tscProject = tsc.createProject('tsconfig.json');
gulp.task('build-typescript', () => gulp.src('src_script/**/*.ts')
	.pipe(tscProject())
	.js.pipe(gulp.dest("src_script/"))
);

gulp.task("browserify-typescript", () => browserify({debug: true})
	.add("src_script/index.js")
	.bundle()
	.pipe(source("index.js"))
	.pipe(buffer())
	.pipe(sourcemaps.init({ loadMaps: true }))
	//.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./'))
);

gulp.task('watch', () => {
    gulp.watch('src_style/*.scss', {usePolling: true}, gulp.series('build-sass'));
    gulp.watch('src_script/**/*.ts', {usePolling: true}, gulp.series('build-typescript'));
    gulp.watch('src_script/index.js', {usePolling: true}, gulp.series('browserify-typescript'));
});