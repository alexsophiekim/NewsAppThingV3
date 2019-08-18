module.exports = function(grunt) {
    grunt.initConfig({
      watch:{
         sass: {
           files: ['scss/*.scss'],
           tasks: ['sass', 'cssmin']
         },
         js: {
           files: ['js/*.js', '!js/*.min.js'],
           tasks: ['jshint', 'uglify']
         }
       },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['watch']);



};
