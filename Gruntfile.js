'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'tasks/*.js']
        },

        base64image: {
            css: {
                styles: 'test/styles/',
                images:'test/images/',
                dest: 'test/dest/'
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    require('./task/base64image')(grunt);

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['base64image']);
};
