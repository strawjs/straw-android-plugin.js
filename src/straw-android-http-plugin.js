// straw-android-http-plugin

window.straw.http = (function (straw, $) {
    'use strict';

    var PLUGIN_NAME = 'http';
    var ACTION_GET = 'get';

    var exports = {
        get: function (url, timeout, charset) {
            var d = $.Deferred();

            straw.exec(PLUGIN_NAME, ACTION_GET, {
                url: url,
                timeout: timeout,
                charset: charset
            }, function (x) {
                d.resolve(x);
            }, function (x) {
                d.reject(x);
            });

            return d;
        }
    };

    return exports;
}(window.straw, window.$));
