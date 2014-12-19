module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // load all tasks
  require('time-grunt')(grunt); // only include this if you have added time-grunt in package.json

  // Include your custom js libraries
  var jsLibs = [
    'bower_components/jquery/dist/jquery.js'
  ];

  // Include only what you want! No trailing ","!
  var jsBootstrap = [
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js'
  ];

  // Your custom javascript files. No trailing ","!
  var jsApp = [
    'js/app.js',
    'js/_*.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/bootstrap-sass-official/assets/stylesheets'],
        sourceMap: true
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        jsApp
      ]
    },

    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'js/libs/libs.min.js': [jsLibs],
          'js/libs/boostrap.min.js': [jsBootstrap],
          'js/app.min.js': [jsApp]
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      js: {
        files: [
          jsLibs,
          jsBootstrap,
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },

      livereload: {
        options: {
          livereload: true
        },
        files: [
          'js/app.min.js',
          'css/app.css'
        ]
      }
    }

  });

  grunt.registerTask('build', [
    'jshint',
    'uglify',
    'sass'
  ]);
};