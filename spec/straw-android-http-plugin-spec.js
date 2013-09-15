
var describe = window.describe;
var it = window.it;
var expect = window.expect;

var straw = window.straw;

describe('http', function () {
    'use strict';

    it('exists', function () {
        expect(straw).not.toEqual(null);
        expect(straw.http).not.toEqual(null);
        expect(typeof straw.http).toEqual('object');
    });
});
