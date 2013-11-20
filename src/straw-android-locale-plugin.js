// straw-android-http-plugin

window.straw.locale = (function (straw, $) {
    'use strict';

    var PLUGIN_NAME = 'locale';
    var ACTION_GET_LANGUAGE = 'getLanguage';

    var exports = {

        /**
         * @return {promise}
         *     @done
         *         @param {string} current locale (en, fr, ja, kr,...
         *     @fail
         *         supposed never to happen
         */
        getLanguage: function () {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_GET_LANGUAGE, {}, function (x) {
                d.resolve(x.value);

            }, function (err) {
                d.reject(err);

            });

            return d.promise();
        }

    };

    return exports;

}(window.straw, window.$));
