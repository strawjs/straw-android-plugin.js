
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


    describe('set', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.sharedPreferences.set).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.sharedPreferences.set('a_key', {a: 123});

            // sharedPreferences plugin's set action
            expect(spy.getCall(0).args[0]).toBe('sharedPreferences');
            expect(spy.getCall(0).args[1]).toBe('set');

            // arguments assertions
            expect(typeof spy.getCall(0).args[2]).toBe('object');

            // key
            expect(spy.getCall(0).args[2].key).toBe('a_key');

            // value is JSON.stringified
            expect(spy.getCall(0).args[2].value).toBe('{"a":123}');

            straw.exec.restore();

        });

    });


    describe('has', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.sharedPreferences.has).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.sharedPreferences.has('a_key');

            // sharedPreferences plugin's has action
            expect(spy.getCall(0).args[0]).toBe('sharedPreferences');
            expect(spy.getCall(0).args[1]).toBe('has');

            // arguments assertions
            expect(typeof spy.getCall(0).args[2]).toBe('object');

            // key
            expect(spy.getCall(0).args[2].key).toBe('a_key');

            straw.exec.restore();

        });

    });


    describe('clear', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.sharedPreferences.clear).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.sharedPreferences.clear();

            // sharedPreferences plugin's remove action
            expect(spy.getCall(0).args[0]).toBe('sharedPreferences');
            expect(spy.getCall(0).args[1]).toBe('clear');

            straw.exec.restore();

        });

    });


    describe('remove', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.sharedPreferences.remove).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.sharedPreferences.remove('a_key', {a: 123});

            // sharedPreferences plugin's remove action
            expect(spy.getCall(0).args[0]).toBe('sharedPreferences');
            expect(spy.getCall(0).args[1]).toBe('remove');

            // arguments assertions
            expect(typeof spy.getCall(0).args[2]).toBe('object');

            // key
            expect(spy.getCall(0).args[2].key).toBe('a_key');

            straw.exec.restore();

        });

    });


    describe('dump', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.sharedPreferences.dump).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.sharedPreferences.dump();

            // sharedPreferences plugin's dump action
            expect(spy.getCall(0).args[0]).toBe('sharedPreferences');
            expect(spy.getCall(0).args[1]).toBe('dump');

            straw.exec.restore();

        });

    });
});
