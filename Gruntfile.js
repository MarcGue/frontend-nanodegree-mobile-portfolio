module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'img', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'dist/img/' // Destination path prefix
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: 'dist/js'
                }]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['imagemin', 'cssmin', 'uglify']);
};