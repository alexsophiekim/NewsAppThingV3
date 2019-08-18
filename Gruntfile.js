module.exports = function(grunt) {
    grunt.initConfig({

        ///////////////////////////////////////////////
        jshint: {
            all: ['js/*.js'],
            options: {
                'esversion': 6,
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('js', ['jshint']);
};
