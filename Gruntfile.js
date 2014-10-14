var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['scripts/**/*.js', ]
        },

        clean: {
            server: '.tmp'
        },
        watch: {
            less: {
                files: ['less/{,*/}*.less'],
                tasks: ['less:development', 'autoprefixer']
            },
            jshint: {
                files: ["<%= src.js %>"],
                tasks: ['jshint']
            },
            livereload: {
                options: {
                    livereload: 35729
                },
                files: [
                    'views/{,*/}*.html',
                    '.tmp/css/{,*/}*.css',
                    '{.tmp,./}/scripts/{,*/}*.js',
                    'img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    ".tmp/css/AdminLTE.css": "less/AdminLTE.less"
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to 'localhost' to deny access to the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        './'
                    ],
                    middleware: function(connect) {
                        return [
                            proxySnippet,
                            connect.static(require('path').resolve('.tmp')),
                            connect.static(require('path').resolve('./')),
                        ];
                    }
                }
            }
        },
        autoprefixer: {
            options: ['last 1 version'],
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/css/',
                    src: '{,*/}*.css',
                    dest: '.tmp/css/'
                }]
            }
        },
        concurrent: {
            server: [
                'jshint',
                'less:development'
            ]
        },
        // Configure Lint\JSHint Task
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: ['Gruntfile.js', '<%= src.js %>']
            }
        }

    });

    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['less']);

    grunt.registerTask('server', function(target) {
        // if (target === 'dist') {
        //     return grunt.task.run(['build', 'connect:dist:keepalive']);
        // }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'configureProxies',
            'connect:livereload',
            'watch'
        ]);
    });

};
