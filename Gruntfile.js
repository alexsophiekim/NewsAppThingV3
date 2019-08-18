module.exports = function(grunt) {
    grunt.initConfig({
      csslint: {
        strict: {
          src: ['css/*.css']
        },
        lax: {
          options: {
            import: false
          },
          src: ['css/*.css']
        }
      },

      ///////////


    });
    grunt.loadNpmTasks('grunt-contrib-csslint');



    grunt.registerTask('css', ['csslint']);

};
