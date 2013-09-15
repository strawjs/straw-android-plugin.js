

describe('http', function () {
    'use strict';

    var expect = window.expect;

    it('exists', function () {
        expect(straw).not.toEqual(null);
        expect(straw.http).not.toEqual(null);
        expect(typeof straw.http).toEqual('object');
    });
});
