
var describe = window.describe;
var it = window.it;
var expect = window.expect;

var sinon = window.sinon;

var straw = window.straw;


describe('browser', function () {
    'use strict';

    it('exists', function () {

        expect(typeof straw.browser).toEqual('object');

    });


    describe('open', function () {

        it('is defined and is a function', function () {

            expect(straw.browser.open).not.toEqual(null);
            expect(typeof straw.browser.open).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.browser.open('http://example.com/');

            expect(spy.getCall(0).args[0]).toBe('browser');
            expect(spy.getCall(0).args[1]).toBe('open');
            expect(typeof spy.getCall(0).args[2]).toBe('object');
            expect(spy.getCall(0).args[2].value).toBe('http://example.com/');

            straw.exec.restore();

        });

        describe('success handler', function () {

            it('will be called, when plugin execution succeeded', function () {

                var spy = sinon.spy(straw.JS_TO_NATIVE_INTERFACE, 'exec');
                var spy2 = sinon.spy();
                var spy3 = sinon.spy();

                straw.browser.open('http://example.com/').done(spy2).fail(spy3);

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

                straw.browser.open('zzzz').done(spy2).fail(spy3);

                var callbackId = spy.getCall(0).args[3];

                straw.NATIVE_TO_JS_INTERFACE.exec(callbackId, false, {}, false);

                expect(spy2.called).toBe(false);
                expect(spy3.calledOnce).toBe(true);

                spy.restore();
            });

        });

    });
});
