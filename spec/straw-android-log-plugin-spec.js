
var describe = window.describe;
var it = window.it;
var expect = window.expect;

var sinon = window.sinon;

var straw = window.straw;


describe('log', function () {
    'use strict';

    it('exists', function () {

        expect(straw.log).not.toEqual(null);
        expect(typeof straw.log).toEqual('object');

    });

    describe('verbose', function () {

        it('calls straw.exec with appropriate arguments', function () {
            var spy = sinon.spy(straw, 'exec');

            straw.log.verbose('abc');

            var args = spy.getCall(0).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('verbose');
            expect(args[2].message).toBe('abc');
            expect(args[2].label).toBe('straw');

            straw.log.verbose('ABC', 'a label');

            args = spy.getCall(1).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('verbose');
            expect(args[2].message).toBe('ABC');
            expect(args[2].label).toBe('a label');

            spy.restore();
        });

    });

    describe('debug', function () {

        it('calls straw.exec with appropriate arguments', function () {
            var spy = sinon.spy(straw, 'exec');

            straw.log.debug('abc');

            var args = spy.getCall(0).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('debug');
            expect(args[2].message).toBe('abc');
            expect(args[2].label).toBe('straw');

            straw.log.debug('ABC', 'a label');

            args = spy.getCall(1).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('debug');
            expect(args[2].message).toBe('ABC');
            expect(args[2].label).toBe('a label');

            spy.restore();
        });

    });

    describe('info', function () {

        it('calls straw.exec with appropriate arguments', function () {
            var spy = sinon.spy(straw, 'exec');

            straw.log.info('abc');

            var args = spy.getCall(0).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('info');
            expect(args[2].message).toBe('abc');
            expect(args[2].label).toBe('straw');

            straw.log.info('ABC', 'a label');

            args = spy.getCall(1).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('info');
            expect(args[2].message).toBe('ABC');
            expect(args[2].label).toBe('a label');

            spy.restore();
        });

    });

    describe('warn', function () {

        it('calls straw.exec with appropriate arguments', function () {
            var spy = sinon.spy(straw, 'exec');

            straw.log.warn('abc');

            var args = spy.getCall(0).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('warn');
            expect(args[2].message).toBe('abc');
            expect(args[2].label).toBe('straw');

            straw.log.warn('ABC', 'a label');

            args = spy.getCall(1).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('warn');
            expect(args[2].message).toBe('ABC');
            expect(args[2].label).toBe('a label');

            spy.restore();
        });

    });

    describe('error', function () {

        it('calls straw.exec with appropriate arguments', function () {
            var spy = sinon.spy(straw, 'exec');

            straw.log.error('abc');

            var args = spy.getCall(0).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('error');
            expect(args[2].message).toBe('abc');
            expect(args[2].label).toBe('straw');

            straw.log.error('ABC', 'a label');

            args = spy.getCall(1).args;

            expect(args[0]).toBe('log');
            expect(args[1]).toBe('error');
            expect(args[2].message).toBe('ABC');
            expect(args[2].label).toBe('a label');

            spy.restore();
        });

    });

});
