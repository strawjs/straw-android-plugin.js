
module.exports = (g) ->

  g.initConfig

    jshint:
      all: ['src/*.js', 'spec/*.js']
      options:
        jshintrc: '.jshintrc'

    jasmine:
      options:
        specs: ['spec/*.js']
        helpers: ['spec/helper/*.js']
        vendor: [
          'bower_components/jquery/jquery.min.js'
          'bower_components/sinon-1.7.3.js/index.js'
          'bower_components/straw-android.js/src/straw-android.js'
        ]

      src:
        src: ['src/*.js']

      cov:
        src: ['src-cov/*.js']
        options:
          helpers: [
            'spec/helper/*.js'
            'node_modules/jasmine-jscoverage-reporter/reporter.js'
          ]

    shell:
      instrument:
        command: './node_modules/.bin/jscoverage src src-cov'

      'rm-instrumented':
        command: 'rm -rf src-cov'

  g.loadNpmTasks 'grunt-contrib-jshint'
  g.loadNpmTasks 'grunt-contrib-jasmine'
  g.loadNpmTasks 'grunt-shell'

  g.registerTask 'default', ['jshint', 'jasmine:src']
  g.registerTask 'cov', ['shell:instrument', 'jasmine:cov', 'shell:rm-instrumented']
