// 载入外挂
var config=require('./config');
var gulp = require('gulp'),
 uglify = require('gulp-uglify'),
 rename = require('gulp-rename'),
 minifycss = require('gulp-minify-css'),
//  clean = require('gulp-clean'),
//  watch = require('gulp-watch'),
 notify = require('gulp-notify'),
  // sourcemaps=require('gulp-sourcemaps'),
//  less = require('gulp-less'),
  sass = require('gulp-sass'),
 plumber = require('gulp-plumber'),
AutoPrefix=require('gulp-autoprefixer')
// LessPluginAutoPrefix = require('less-plugin-autoprefix');
// var autoprefixer = LessPluginAutoPrefix({
//     browsers:config.browsers,
//     cascade: true
// });

var env = {
    production: false
};
// var reload      = browserSync.reload;
// var spritesmith = require('gulp.spritesmith');//雪碧图
//sass
gulp.task('sass', function () {
  return gulp.src(config.scss.src)
    .pipe(plumber({errorHandler:notify.onError('Error:<%= error.message %>')}))
    // .pipe(sourcemaps.init())
    .pipe(AutoPrefix({
        browsers:config.browsers,
        cascade: true
    }))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    // .pipe(sourcemaps.write())
    .pipe(rename((path) => {path.basename =path.basename.replace('.scss','') ;path.extname = '.wxss'}))
    .pipe(gulp.dest(config.scss.dist));
});

// // 样式~
// gulp.task('less',function(){
//   if(env.production){
//   return gulp.src(config.less.src)
//     .pipe(plumber({errorHandler:notify.onError('Error:less--<%= error.message.split("less")[1] %>')}))
//     .pipe(less({
//         plugins: [autoprefixer]
//     }))
//    // .pipe(concat('style.css'))
//     .pipe(gulp.dest(config.less.dist))
//     // .pipe(rename({ suffix: '.min' }))
//     .pipe(minifycss())
//     .pipe(gulp.dest(config.less.dist));
//   //  .pipe(notify({ message: 'Styles task complete' }));
//   }else{
//   return gulp.src(config.less.src)
//     .pipe(plumber({errorHandler:notify.onError('Error:less--<%= error.message.split("less")[1] %>')}))
//      .pipe(sourcemaps.init())
//     .pipe(less({
//         plugins: [autoprefixer]
//     }))
//    // .pipe(concat('style.css'))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(config.less.dist))
//     // .pipe(rename({ suffix: '.min' }))
//     .pipe(minifycss())
//     .pipe(gulp.dest(config.less.dist));
//   //  .pipe(notify({ message: 'Styles task complete' }));
//   }
// })
// 开发环境
gulp.task('dev',['sass'], function() {
  // 看守所有.less档
  // gulp.watch(config.less.watchSrc, ['less']);
  // 看守所有.sass档
  console.log('config.scss.watchSrc',config.scss.watchSrc)
   gulp.watch(config.scss.watchSrc, ['sass']);
    // var auto={};
});
gulp.task('production',['production_','sass']);
