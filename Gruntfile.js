module.exports = function(grunt) {
    grunt.initConfig({
      csslint: {
        strict: {
          src: ['*.css']
        },
        lax: {
          options: {
            import: false
          },
          src: ['*.css']
        }
      },

      ///////////


    });
};
