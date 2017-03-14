module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: ['dist'],
            images: ['dist/views/images/pizzeria.jpg']
        },
        imagemin: {
            dynamic: {
                options: { // Target options
                    optimizationLevel: 7,
                    svgoPlugins: [{
                        removeViewBox: true
                    }]
                },
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'img', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'dist/img/' // Destination path prefix
                }, {
                    expand: true,
                    cwd: 'views/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/views/images'
                }]
            }
        },
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'optimized',
                        width: 1024,
                        height: 768
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'dist/views/images',
                    src: ['pizzeria.jpg'],
                    dest: 'dist/views/images'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css'],
                    dest: 'dist/css'
                }, {
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css'],
                    dest: 'dist/views/css'
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
                }, {
                    expand: true,
                    cwd: 'views/js',
                    src: '**/*.js',
                    dest: 'dist/views/js'
                }]
            }
        },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'dist/index.html': 'index.html', // 'destination': 'source'
                    'dist/project-2048.html': 'project-2048.html',
                    'dist/project-mobile.html': 'project-mobile.html',
                    'dist/project-webperf.html': 'project-webperf.html',
                    'dist/views/pizza.html': 'views/pizza.html'
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**'],
                    dest: 'docs/'
                }]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'imagemin', 'cssmin', 'uglify', 'htmlmin', 'responsive_images', 'clean:images']);
    grunt.registerTask('doc', ['copy']);
};