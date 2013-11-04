
var describe = window.describe;
var it = window.it;
var expect = window.expect;

var sinon = window.sinon;

var straw = window.straw;


describe('http', function () {
    'use strict';

    it('exists', function () {

        expect(typeof straw.sharedPreferences).toEqual('object');

    });


    describe('get', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.sharedPreferences.get).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.sharedPreferences.get('a_key', {a: 123});

            // sharedPreferences plugin's get action
            expect(spy.getCall(0).args[0]).toBe('sharedPreferences');
            expect(spy.getCall(0).args[1]).toBe('get');

            // arguments assertions
            expect(typeof spy.getCall(0).args[2]).toBe('object');

            // key
            expect(spy.getCall(0).args[2].key).toBe('a_key');

            // value is JSON.stringified
            expect(spy.getCall(0).args[2].value).toBe('{"a":123}');

            straw.exec.restore();

        });

    });
});
