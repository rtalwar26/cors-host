const gulp = require('gulp')
var replace = require('gulp-replace');
let conf_id = "functional-conf-2016";
const fs = require('fs')
const Promise = require("bluebird")


function renderPage(confID,screenName,fileName){
 return new Promise(function(resolve,reject){
   var template = require('marko').load(require.resolve('./template.marko'));
     template.render({'conf_id':confID,'screen_name':screenName}, function (err, html) {
         writeFile(`./${fileName}`,html).then(resolve,reject);  
    });
 })
  
}

function writeFile(path,html){
    return new Promise(function(resolve,reject){
fs.writeFile(path, html, function (err) {
            if (err) {
                console.error(err)
                reject(err)
                return
            }

            resolve()
        })
    })
}

require('lasso').configure('lasso-config.json')


gulp.task('profile', function(){
       return renderPage(conf_id,'profile','profile.html')

});

gulp.task('schedule', function(){
       return renderPage(conf_id,'schedule','schedule.html')

});

gulp.task('proposals', function(){
       return renderPage(conf_id,'proposal-list','proposals.html')

});


gulp.task('proposal', function(){
     return renderPage(conf_id,'proposal','proposal.html')

});

gulp.task('speakers', function(){
   return renderPage(conf_id,'speakers','speakers.html')
});


gulp.task('default', ['proposals','proposal','speakers','schedule'])

gulp.watch('./template.marko', ['default']);