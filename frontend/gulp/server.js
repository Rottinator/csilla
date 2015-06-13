var connect = require("gulp-connect");
var less 	= require("gulp-less");

module.exports = function (gulp) {
	gulp.task("server", ["server-less", "server-watch"], function () {
		connect.server({
			root: ["./", "src"],
			port: 5001
		});
	});

	gulp.task("server-watch", function () {
		gulp.watch("./src/**/*.less", ["server-less"]);
	});

	gulp.task("server-less", function () {
		return gulp.src("./src/style.less")
			.pipe(less())
			.on("error", function (err) { console.log("Less-Syntax-Error: " + err); this.emit("end")})
			.pipe(gulp.dest("./src/css/"));
	});
};