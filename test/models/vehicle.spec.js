'use strict';
import {mocha} from '../../node_modules/mocha/mocha';
import {sinon} from '../../node_modules/sinon/lib/sinon';
import {expect} from 'chai';
import Vehicle from '../../src/models/vehicle';

describe('Vehicle spec tests', function () {
    it('should create global variables for Vehicle', function () {
        expect(Vehicle).to.be.exist;
    });

    it('should be created with default values for its attributes', function() {
        var vehicle = new Vehicle();
        expect(vehicle.get('make')).to.equal('');
        expect(vehicle.get('model')).to.equal('');
        expect(vehicle.get('year')).to.equal(0);
        expect(vehicle.get('fuelType')).to.equal(0);
    });
});
