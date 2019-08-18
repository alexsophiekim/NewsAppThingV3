module.exports = function(grunt) {
    grunt.initConfig({
      jshint: {
        files: ['*/*.js','js/script.js'],
        options:{
          globals:{
            jQuery:true
          }
        }
      },

      ///////////


    });
};
