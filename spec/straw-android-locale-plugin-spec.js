
var describe = window.describe;
var it = window.it;
var expect = window.expect;

var sinon = window.sinon;

var straw = window.straw;


describe('locale', function () {
    'use strict';

    it('exists', function () {

        expect(typeof straw.locale).toEqual('object');

    });


    describe('getLanguage', function () {

        it('is defined and is a function', function () {

            expect(straw.locale.getLanguage).not.toEqual(null);
            expect(typeof straw.locale.getLanguage).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.locale.getLanguage();

            expect(spy.getCall(0).args[0]).toBe('locale');
            expect(spy.getCall(0).args[1]).toBe('getLanguage');
            expect(typeof spy.getCall(0).args[2]).toBe('object');

            straw.exec.restore();

        });

        describe('success handler', function () {

            it('will be called, when plugin execution succeeded', function () {

                var spy = sinon.spy(straw.JS_TO_NATIVE_INTERFACE, 'exec');
                var spy2 = sinon.spy();
                var spy3 = sinon.spy();

                straw.locale.getLanguage().done(spy2).fail(spy3);

                var callbackId = spy.getCall(0).args[3];

                straw.NATIVE_TO_JS_INTERFACE.exec(callbackId, true, {value: 'en'}, false);

                expect(spy2.calledOnce).toBe(true);
                expect(spy2.getCall(0).args[0]).toBe('en');
                expect(spy3.called).toBe(false);

                spy.restore();
            });

        });

        describe('failure handler', function () {

            it('will be called, when plugin execution failed', function () {

                var spy = sinon.spy(straw.JS_TO_NATIVE_INTERFACE, 'exec');
                var spy2 = sinon.spy();
                var spy3 = sinon.spy();

                straw.locale.getLanguage().done(spy2).fail(spy3);

                var callbackId = spy.getCall(0).args[3];

                straw.NATIVE_TO_JS_INTERFACE.exec(callbackId, false, {}, false);

                expect(spy2.called).toBe(false);
                expect(spy3.calledOnce).toBe(true);

                spy.restore();
            });

        });

    });
});
