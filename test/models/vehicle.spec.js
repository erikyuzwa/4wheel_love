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

    it('should fire a custom event when state change', function() {
        var spy = sinon.spy();
        var vehicle = new Vehicle();

        vehicle.on('change', spy);

        vehicle.set({completed: true, order: 1});
        vehicle.set('title', 'my title');

        sinon.assert.calledTwice(spy);
    });

    it('should trigger an invalid event on failed validation', function() {
        var errorCallback = sinon.spy();
        var vehicle = new Vehicle();

        vehicle.on('invalid', errorCallback);

        vehicle.save({ completed: 'unvalid completed value' });

        sinon.assert.calledOnce(errorCallback);
        sinon.assert.calledWithMatch(errorCallback, vehicle, 'Todo.completed must be a boolean value.');
        // Unless set {validate:true} to be called before set
        expect(vehicle.get('completed')).to.equal('unvalid completed value');
    });
});
