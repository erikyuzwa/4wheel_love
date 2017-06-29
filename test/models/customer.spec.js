
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

});
