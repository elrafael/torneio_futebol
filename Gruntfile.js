/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //LESS to CSS
    less: {
      development: {
        options: {
          cleancss: true,
          optimization: 2
        },
        files: {
          'css/styles.min.css': ['less/styles.less']
        }
      }
     },
    //Uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + 
            '<%= grunt.template.today("yyyy-mm-dd") %> */' + "\n",
        mangle: false
      },
      my_target: {
        files: {
          'js/scripts.min.js': 'js/scripts.js'
        }
      }
    },
    //Concat
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + 
            '<%= grunt.template.today("yyyy-mm-dd") %> */' + "\n" +
            '/* Do not try to edit this file. Try to search for src/ folder */' + "\n",
      },
      dist: {
        src: [
          'js/vendor/angular.min.js',
          'js/vendor/angular-*.js',
          'js/vendor/jquery*.js',
          'js/vendor/bootstrap*.js',
          'js/app.js',
          'js/routes.js',
          'js/directives/*.js',
          'js/services/*.js',
          'js/controllers/*.js',
          'js/filters/*.js',
          'js/src/scripts.js'
        ],
        dest: 'js/scripts.js'
      }
    }
  });

  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['less', 'concat', 'uglify']);
  grunt.registerTask('server', ['less', 'concat', 'uglify']);
};