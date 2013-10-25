// straw-android-log-plugin

window.straw.log = (function (straw) {
    'use strict';

    var PLUGIN_NAME = 'log';

    var ACTION_VERBOSE = 'verbose';
    var ACTION_DEBUG = 'debug';
    var ACTION_INFO = 'info';
    var ACTION_WARN = 'warn';
    var ACTION_ERROR = 'error';

    var DEFAULT_LABEL = 'straw';

    var exports = {

        label: DEFAULT_LABEL,

        setLabel: function (label) {
            this.label = label;
        },

        verbose: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_VERBOSE, {
                message: message,
                label: label || this.label
            });
        },

        debug: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_DEBUG, {
                message: message,
                label: label || this.label
            });
        },

        info: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_INFO, {
                message: message,
                label: label || this.label
            });
        },

        warn: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_WARN, {
                message: message,
                label: label || this.label
            });
        },

        error: function (message, label) {
            straw.exec(PLUGIN_NAME, ACTION_ERROR, {
                message: message,
                label: label || this.label
            });
        }

    };

    return exports;
}(window.straw));
