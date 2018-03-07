var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default',()=>{

    nodemon({
        script:'server.js',
        ext:'.js',
        env:{PORT:3200},
    }).on('restart',()=>{
        console.log('restarted');
    }).on('error',()=>{
        console.log('------------------this is gulp error')      
    })

})