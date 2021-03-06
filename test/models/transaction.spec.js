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
        expect(trans.get('paymentDate')).to.equal(null);
        expect(trans.get('maintenanceId')).to.equal(0);
        expect(trans.get('vehicleId')).to.equal(0);
        expect(trans.get('customerId')).to.equal(0);
        expect(trans.get('odo')).to.equal(0);
    });

    it('should update payment and status when paymentTransactionId change', function() {
        var trans = new Transaction();

        trans.set({paymentTransactionId: '==CBCBZZERAFJJADFA'});

        expect(trans.get('paymentDate')).to.not.equal(null);
        expect(trans.get('status')).to.equal('paid');

    });
});
