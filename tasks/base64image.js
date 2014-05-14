'use strict';

module.exports = function(grunt) {
    var fs = require('fs'),
        base64image = require('css-base64-images'),
        Promise = require('promise');

    function base64FromFile(cssFile, imageDir, dest) {
        return new Promise(function(resolve, reject) {
            base64image.fromFile(cssFile, imageDir, function(err, css) {
                if (err) {
                    reject(err);
                } else {
                    grunt.file.write(dest, css);
                    resolve();
                }
            });
        });
    }

    grunt.registerMultiTask('base64image', 'Base64 images in css file.', function() {
        var self = this,
            promiseArr,
            done;
        this.files.forEach(function(file) {
            if (grunt.file.exists(file.images)) {
                done = self.async();
                promiseArr = [];
                grunt.file.recurse(file.styles, function(abspath, rootdir, subdir, filename) {
                    promiseArr.push(base64FromFile(abspath, file.images, file.dest + (subdir || '') + filename));
                });
                Promise.all(promiseArr).done(function() {
                    grunt.log.writeln('Base64 ' + String(promiseArr.length).cyan + ' files');
                    done();
                }, function(err) {
                    grunt.fail.fatal(err);
                });
            } else {
                grunt.log.writeln('No such css file to base64');
                grunt.file.copy(file.styles, file.dest);
            }
        });
    });
};
