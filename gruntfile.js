module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          'dev/styles/main.css': 'src/styles/main.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          'dist/styles/main.min.css': 'src/styles/main.less'
        }
      }
    },
    concurrent: {
      dev: ['less:development'],
      prod: ['less:production']
    },
    watch: {
      dev: {
        files: ['src/styles/*.less'],
        tasks: ['less:development']
      },
      html: {
           files: ['src/index.html'],
           tasks: ['replace:dev']
      }
    }, 
    replace: {
        dev: {
           options: {
            patterns: [
              {
                match: 'ENDERECO-DO-CSS',
                replacement: './styles/main.css'

            }, {
              match: 'ENDERECO-DO-JS',
              replacement: '../src/scripts/main.js'
            }
          ]
           }, files: [{
                expand: true,
                flatten: true,
                src: ['src/index.html'],
                dest: 'dev/'
            }]
        },dist: {
          options: {
            patterns: [
              {
              match: 'ENDERECO-DO-CSS',
              replacement: './styles/main.min.css'
            },
              {
                match: 'ENDERECO-DO-JS',
                replacement: './scripts/main.min.js'
              }
          ]
          },files: [{
          expand: true,
          flatten: true,
          src: ['prebuild/index.html'],
          dest: 'dist/'
        }]
      }
    }, 
    htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
           files: {
            'prebuild/index.html': 'src/index.html'
          }
        }
      },
      clean: ['prebuild'],

      uglify: {
          target: {
            files: {
              'dist/scripts/main.min.js': 'src/scripts/main.js'
            }
          }
        },
        jshint: {
          all: ['src/scripts/**/*.js']
        }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('default', ['watch', 'jshint'] );
  grunt.registerTask('build', ['concurrent:prod', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify', 'jshint']);
};
