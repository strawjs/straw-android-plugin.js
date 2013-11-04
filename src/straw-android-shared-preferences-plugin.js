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

        /**
         * @param {string} key the key to get
         * @param {object} value default value in the case the key doesn't exist
         * @return {promise}
         *     @done
         *         @param {object} value the got value
         *     @fail
         *         @param {object} error
         *         @subparam {string} error.code error code
         *         @subparam {string} error.message
         */
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

            return d.promise();
        },

        /**
         * set value for key to SharedPreferences
         * @param {string} key the key to set
         * @param {object} value the value to set
         * @return {promise}
         *     @done
         *         @param {boolean} value if successfully set or not
         *     @fail
         *         @param {object} error
         *         @subparam {string} error.code error code
         *         @subparam {string} error.massage error message
         */
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

            return d.promise();
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

            return d.promise();
        },

        clear: function () {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_CLEAR, {}, function (x) {
                d.resolve(x);
            }, function (x) {
                d.reject(x);
            });

            return d.promise();
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

            return d.promise();
        },

        dump: function () {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_DUMP, {}, function (x) {
                d.resolve(x.value);
            }, function (x) {
                d.reject(x);
            });

            return d.promise();
        }

    };

    return exports;

}(window.straw, window.$));
