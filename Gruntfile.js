/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //LESS to CSS
    less: {
      options: {
        cleancss: true,
        optimization: 2
      },
      files: {
        'css/styles.min.css': ['src/less/*.less']
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
          'src/js/Tocca.min.js',
          'src/js/Utils.js',
          'src/js/Maps.js',
          'src/js/Routes.js',
          'src/js/scripts.js'
        ],
        dest: 'js/scripts.js'
      }
    },
    shell: {
      build_docs: {
        command: 'jsdoc src/js/ -d docs/'
      }
    },
    //Watch and LiveReload
    watch : {
      options: {
        livereload: true
      },
      files: ['src/js/*', 'src/less/*', 'Gruntfile.js', 'index.html'],
      tasks: ['less', 'concat', 'shell']
    }
  });

  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['less', 'concat', 'uglify', 'watch']);
  grunt.registerTask('server', ['less', 'concat', 'uglify', 'watch']);
};