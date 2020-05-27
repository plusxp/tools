'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "less/**/*.less",
            tasks: ["less", "cssmin", "concat", "copy"],
            options: {
                livereload: true,
            }
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    dumpLineNumbers: "comments",
                    paths: ["css/"],
                    livereload: {
                        host: 'localhost',
                        port: 8083
                    }
                },
                files: {
                    // compilation.css  :  source.less
                    "css/main.css": "less/main.less"
                }
            }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            keepSpecialComments: 0,
            roundingPrecision: -1
          },
          target: {
            files: {
              "css/main.min.css": "css/main.css"
            }
          }
        },
        concat: {
            plugins: {
                options: {
                        separator: ';'
                },
                src: [
                      'bower_components/sidr/dist/jquery.sidr.min.js'
                      ],
                dest: 'js/plugins.js',
              }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['bower_components/components-font-awesome/fonts/**'], dest: 'fonts', filter: 'isFile'}
                ]
            }
        }


    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
};
