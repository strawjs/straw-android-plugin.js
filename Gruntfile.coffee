
module.exports = (g) ->

  g.initConfig

    jshint:
      all: ['src/*.js']
      options:
        jshintrc: '.jshintrc'

  g.loadNpmTasks 'grunt-contrib-jshint'
  g.loadNpmTasks 'grunt-contrib-jasmine'

  g.registerTask 'default', ['jshint']
