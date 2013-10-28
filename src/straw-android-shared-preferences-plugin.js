// straw-android-http-plugin

window.straw.sharedPreferences = (function (straw, $) {
    'use strict';

    var PLUGIN_NAME = 'sharedPreferences';
    var ACTION_GET = 'get';
    var ACTION_SET = 'set';
    var ACTION_HAS = 'has';
    var ACTION_CLEAR = 'clear';
    var ACTION_REMOVE = 'remove';
    var ACTION_DUMP = 'dump';

    var exports = {
        get: function (key, value) {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_GET, {
                key: key,
                value: JSON.stringify(value)
            }, function (x) {
                x = JSON.parse(x.value);
                d.resolve(x);
            }, function (x) {
                d.reject(x);
            });

            return d;
        },

        set: function (key, value) {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_SET, {
                key: key,
                value: JSON.stringify(value)
            }, function (x) {
                d.resolve(x.value);
            }, function (x) {
                d.reject(x);
            });

        },

        has: function (key) {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_HAS, {
                key: key
            }, function (x) {
                JSON.parse(x.value);
                d.resolve(x);
            }, function (x) {
                d.reject(x);
            });

        },

        clear: function () {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_CLEAR, {}, function (x) {
                d.resolve(x);
            }, function (x) {
                d.reject(x);
            });

        },

        remove: function (key) {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_REMOVE, {
                key: key
            }, function (x) {
                d.resolve(x);
            }, function (x) {
                d.reject(x);
            });

        },

        dump: function () {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_DUMP, {}, function (x) {
                d.resolve(x.value);
            }, function (x) {
                d.reject(x);
            });

        }

    };

    return exports;
}(window.straw, window.$));
