// straw-android-http-plugin

window.straw.browser = (function (straw, $) {
    'use strict';

    var PLUGIN_NAME = 'browser';

    var exports = {

        /**
         * open a browser as another activity
         * @param {string} url to open
         * @return {promise}
         *     @done
         *     @fail
         *         @param {object} error
         *         @subparam {string} error.code error code
         *         @subparam {string} error.message
         */
        open: function (url) {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, 'open', {
                value: url,

            }, function () {
                // just notify success
                d.resolve();

            }, function (err) {
                d.reject(err);

            });

            return d.promise();
        }

    };

    return exports;

}(window.straw, window.$));
