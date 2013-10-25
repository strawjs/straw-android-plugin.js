
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

            straw.http.get('http://example.com/', 123, 'shift_jis');

            expect(spy.getCall(0).args[0]).toBe('http');
            expect(spy.getCall(0).args[1]).toBe('get');
            expect(typeof spy.getCall(0).args[2]).toBe('object');
            expect(spy.getCall(0).args[2].url).toBe('http://example.com/');
            expect(spy.getCall(0).args[2].timeout).toBe(123);
            expect(spy.getCall(0).args[2].charset).toBe('shift_jis');

            straw.exec.restore();

        });

        describe('success handler', function () {

            it('will be called, when plugin execution succeeded', function () {

                var spy = sinon.spy(straw.JS_TO_NATIVE_INTERFACE, 'exec');
                var spy2 = sinon.spy();
                var spy3 = sinon.spy();

                straw.http.get('http://example.com/', 123, 'shift_jis').done(spy2).fail(spy3);

                var callbackId = spy.getCall(0).args[3];

                straw.NATIVE_TO_JS_INTERFACE.exec(callbackId, true, {}, false);

                expect(spy2.calledOnce).toBe(true);
                expect(spy3.called).toBe(false);

                spy.restore();
            });

        });

        describe('failure handler', function () {

            it('will be called, when plugin execution failed', function () {

                var spy = sinon.spy(straw.JS_TO_NATIVE_INTERFACE, 'exec');
                var spy2 = sinon.spy();
                var spy3 = sinon.spy();

                straw.http.get('http://example.com/', 123, 'shift_jis').done(spy2).fail(spy3);

                var callbackId = spy.getCall(0).args[3];

                straw.NATIVE_TO_JS_INTERFACE.exec(callbackId, false, {}, false);

                expect(spy2.called).toBe(false);
                expect(spy3.calledOnce).toBe(true);

                spy.restore();
            });

        });

    });
});
