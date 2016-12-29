module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        less: {
            dist: {
                files: [
                    {
                        expand: true,
                        src: ['app/**/*.less'],
                        ext: '.css'
                    }
                ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        src: ['app/**/*.css']
                    }
                ]
            }
        },
        watch: {
            css: {
                files: 'app/**/*.less',
                tasks: ['newer:less', 'newer:autoprefixer']
            },
            scripts: {
                files: ['app/**/*.ts','!app/lib/**/*.ts'],
                tasks: ['newer:typescript']
            }
        },
        typescript: {
            base: {
                src: ['app/**/*.ts', '!app/lib/**/*.ts'],
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['typescript','less','autoprefixer']);
};
