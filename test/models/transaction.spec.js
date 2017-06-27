'use strict';
import {mocha} from '../../node_modules/mocha/mocha';
import {sinon} from '../../node_modules/sinon/lib/sinon';
import {expect} from 'chai';
import Transaction from '../../src/models/transaction';

describe('Transaction spec tests', function () {
    it('should create global variables for Transaction', function () {
        expect(Transaction).to.be.exist;
    });

    it('should be created with default values for its attributes', function() {
        var trans = new Transaction();
        expect(trans.get('status')).to.equal('');
        expect(trans.get('paymentTransactionId')).to.equal('');
        expect(trans.get('maintenanceId')).to.equal(0);
        expect(trans.get('vehicleId')).to.equal(0);
        expect(trans.get('customerId')).to.equal(0);
        expect(trans.get('odo')).to.equal(0);
    });

    it('should fire a custom event when state change', function() {
        var spy = sinon.spy();
        var trans = new Transaction();

        trans.on('change', spy);

        trans.set({completed: true, order: 1});
        trans.set('title', 'my title');

        sinon.assert.calledTwice(spy);
    });

    it('should trigger an invalid event on failed validation', function() {
        var errorCallback = sinon.spy();
        var trans = new Transaction();

        //todo.on('invalid', errorCallback);

        //todo.save({ completed: 'unvalid completed value' });

        //sinon.assert.calledOnce(errorCallback);
        //sinon.assert.calledWithMatch(errorCallback, trans, 'Todo.completed must be a boolean value.');
        // Unless set {validate:true} to be called before set
        expect(trans.get('completed')).to.equal('unvalid completed value');
    });
});
