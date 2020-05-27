'use strict';

module.exports = function (grunt) {
// load all grunt tasks
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-assemble');

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	watch: {
		files: 'source/**/*',
		tasks: ['default'],
		options: {
      livereload: true,
    }
	},
  assemble: {
    options: {
      assets: 'assets',
      plugins: ['grunt-assemble-permalinks'],
      permalinks: {
        // structure: ':year/:month/:day/:basename/index:ext'
        structure: ':basename/index:ext'
      },
      partials: ['source/_includes/**/*.hbs'],
      layout: ['source/_layouts/default.hbs'],
      data: ['source/data/*.json'],
      flatten: true
    },
    site: {
      src: ['source/_posts/**/*.md'],
      dest: './public'
    }
  },
	clean: {
		all: [	'public/*.html',
            'public/stylesheets/*.css'
		]
	},
  compass: {
    dist: {
      options: {
        config: 'config.rb'
      }
    }
  }
});
// the default task (running 'grunt' in console) is 'watch'
grunt.registerTask('default', ['assemble']);
};
