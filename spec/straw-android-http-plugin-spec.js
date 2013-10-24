
var describe = window.describe;
var it = window.it;
var expect = window.expect;

var sinon = window.sinon;

var straw = window.straw;


describe('http', function () {
    'use strict';

    it('exists', function () {

        expect(straw).not.toEqual(null);
        expect(straw.http).not.toEqual(null);
        expect(typeof straw.http).toEqual('object');

    });


    describe('get', function () {

        it('is defined and is a function', function () {

            expect(straw.http.get).not.toEqual(null);
            expect(typeof straw.http.get).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.http.get('http://example.com/');

            expect(spy.getCall(0).args[0]).toBe('http');
            expect(spy.getCall(0).args[1]).toBe('get');
            expect(typeof spy.getCall(0).args[2]).toBe('object');
            expect(spy.getCall(0).args[2].url).toBe('http://example.com/');

            straw.exec.restore();

        });

    });
});
