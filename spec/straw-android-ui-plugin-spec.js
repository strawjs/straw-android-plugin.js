
var describe = window.describe;
var it = window.it;
var expect = window.expect;

var sinon = window.sinon;

var straw = window.straw;


describe('ui', function () {
    'use strict';

    it('exists', function () {

        expect(typeof straw.ui).toEqual('object');

    });

    var TOAST_MESSAGE = 'toast message';


    describe('toast', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.ui.toast).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.ui.toast(TOAST_MESSAGE);

            // UI plugin's toast action was called
            expect(spy.getCall(0).args[0]).toBe('ui');
            expect(spy.getCall(0).args[1]).toBe('toast');

            // parameters are correct
            expect(typeof spy.getCall(0).args[2]).toBe('object');
            expect(spy.getCall(0).args[2].text).toBe(TOAST_MESSAGE);

            straw.exec.restore();

        });
    });

    describe('toast', function () {

        it('is defined and is a function', function () {

            expect(typeof straw.ui.toastLong).toBe('function');

        });

        it('invokes straw.execute with appropriate arguments', function () {

            var spy = sinon.spy(straw, 'exec');

            straw.ui.toastLong(TOAST_MESSAGE);

            // UI plugin's toast action was called
            expect(spy.getCall(0).args[0]).toBe('ui');
            expect(spy.getCall(0).args[1]).toBe('toastLong');

            // parameters are correct
            expect(typeof spy.getCall(0).args[2]).toBe('object');
            expect(spy.getCall(0).args[2].text).toBe(TOAST_MESSAGE);

            straw.exec.restore();

        });
    });
});
