// straw-android-http-plugin

window.straw.ui = (function (straw) {
    'use strict';

    var PLUGIN_NAME = 'ui';
    var ACTION_TOAST = 'toast';
    var ACTION_TOAST_LONG = 'toastLong';

    var exports = {
        toast: function (text) {
            straw.exec(PLUGIN_NAME, ACTION_TOAST, {text: text});
        },

        toastLong: function (text) {
            straw.exec(PLUGIN_NAME, ACTION_TOAST_LONG, {text: text});
        }
    };

    return exports;
}(window.straw));
