// straw-android-log-plugin

window.straw.log = (function (straw) {
    'use strict';

    var PLUGIN_NAME = 'log';

    var ACTION_VERBOSE = 'verbose';
    var ACTION_DEBUG = 'debug';
    var ACTION_INFO = 'info';
    var ACTION_WARN = 'warn';
    var ACTION_ERROR = 'error';

    var exports = {

        verbose: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_VERBOSE, {
                message: message,
                label: label
            });
        },

        debug: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_DEBUG, {
                message: message,
                label: label
            });
        },

        info: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_INFO, {
                message: message,
                label: label
            });
        },

        warn: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_WARN, {
                message: message,
                label: label
            });
        },

        error: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_ERROR, {
                message: message,
                label: label
            });
        }

    };

    return exports;
}(window.straw));
