var gulp = require('gulp');
// var uglifyJs = require('gulp-uglify');
var connect  = require('gulp-connect');
var rubySass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

// 编译Sass
gulp.task('sass', function () {
    return rubySass('./src/sass/*.scss', {
        sourcemap: false,
        style: 'compressed',
    }).pipe(gulp.dest('./dist/css/'));
});

// 压缩JS
// gulp.task('minifyJs', function () {
//     return gulp.src('./src/js/*.js')
//         .pipe(uglifyJs())
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist/js/'));
// });

//把img文件夹下所有的jpg文件复制到发布目录下
gulp.task("copy-jpg",function () {
    gulp.src("./img/*.jpg").pipe(gulp.dest("./dist/img/"));
    gulp.src("./img/*.png").pipe(gulp.dest("./dist/img/"));
    gulp.src("./img/*.gif").pipe(gulp.dest("./dist/img/"));
});

// 监听Html
gulp.task('html', ['sass', 'copy-jpg'], function () {
    return gulp.src('./*.html').pipe(connect.reload());
});

// 监听
gulp.task('default', ['sass', 'copy-jpg'], function () {
    // 开启服务器
    connect.server({
        port: 9001,
        livereload: true
    });
    gulp.watch('./img/*.jpg', ['html']);
    gulp.watch('./src/sass/*.scss', ['html']);
    // gulp.watch('./src/js/*.js', ['html']);
});