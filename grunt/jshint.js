'use strict';

// jshint config

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  gruntfile: {
    src: ['Gruntfile.js']
  },
  app: {
    src: [
      'app/scripts/{,*/}*.js',
    ]
  }
}