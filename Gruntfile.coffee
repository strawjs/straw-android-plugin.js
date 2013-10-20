
module.exports = (g) ->

  g.initConfig

    jshint:
      all: ['src/*.js', 'spec/*.js']
      options:
        jshintrc: '.jshintrc'

    jasmine:
      src: ['src/*.js']
      options:
        specs: ['spec/*.js']
        helpers: ['spec/helper/*.js']
        vendor: [
          'bower_components/jquery/jquery.min.js'
          'bower_components/sinon/lib/sinon.js'
          'bower_components/straw-android.js/src/straw-android.js'
        ]

  g.loadNpmTasks 'grunt-contrib-jshint'
  g.loadNpmTasks 'grunt-contrib-jasmine'

  g.registerTask 'default', ['jshint', 'jasmine']
