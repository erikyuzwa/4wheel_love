
'use strict';
import {mocha} from '../../node_modules/mocha/mocha';
import {sinon} from '../../node_modules/sinon/lib/sinon';
import {expect} from 'chai';
import Customer from '../../src/models/customer';

describe('Customer spec tests', function () {
    it('should create global variables for Customer', function () {
        expect(Customer).to.exist;
    });

    it('should be created with default values for its attributes', function() {
        var customer = new Customer();
        expect(customer.get('firstName')).to.equal('');
        expect(customer.get('lastName')).to.equal('');
        expect(customer.get('vehicleId')).to.equal(0);
    });

    it('should fire a custom event when state change', function() {
        var spy = sinon.spy();
        var customer = new Customer();

        customer.on('change', spy);

        customer.set({completed: true, order: 1});
        customer.set('title', 'my title');

        sinon.assert.calledTwice(spy);
    });

    it('should trigger an invalid event on failed validation', function() {
        var errorCallback = sinon.spy();
        var customer = new Customer();

        customer.on('invalid', errorCallback);

        customer.save({ completed: 'unvalid completed value' });

        sinon.assert.calledOnce(errorCallback);
        sinon.assert.calledWithMatch(errorCallback, customer, 'Customer.completed must be a boolean value.');
        // Unless set {validate:true} to be called before set
        expect(customer.get('completed')).to.equal('unvalid completed value');
    });
});
