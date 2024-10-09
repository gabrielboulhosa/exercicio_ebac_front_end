const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');
const imagem = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilasass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(maps.init())
    .pipe(maps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}


function comprimirimagem() {
    return gulp.src('./source/imagens/*')
    .pipe(imagem())
    .pipe(gulp.dest('./build/imagens'))
}

function comprimirjs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.watch = function watch() {
    gulp.watch('./source/styles/*.scss', compilasass); // Monitorar arquivos SASS
    gulp.watch('./source/imagens/*', comprimirimagem);     // Monitorar imagens
    gulp.watch('./source/scripts/*.js', comprimirjs);      // Monitorar arquivos JS
}



exports.default = gulp.series(compilasass, comprimirimagem, comprimirjs);
