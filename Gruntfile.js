/**
 * Created by michaelzhao007 on 11/23/2014.
 */
'use strict'

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('node_modules/grunt/package.json')
  });

//    grunt.loadNpmTasks("grunt-contrib-clean");
//
//    grunt.registerTask("default",['clean']);
    grunt.registerTask('heroku:production', 'clean less mincss uglify');


};
