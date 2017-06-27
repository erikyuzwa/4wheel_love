
'use strict';
import {mocha} from '../../node_modules/mocha/mocha';
import {sinon} from '../../node_modules/sinon/lib/sinon';
import {expect} from 'chai';
import Maintenance from '../../src/models/maintenance';

describe('Maintenance spec tests', function () {
    it('should create global variables for Maintenance', function () {
        expect(Maintenance).to.be.exist;
    });

    it('should be created with default values for its attributes', function() {
        var maintenance = new Maintenance();
        expect(maintenance.get('type')).to.equal('');
        expect(maintenance.get('description')).to.equal('');
    });

    it('should fire a custom event when state change', function() {
        var spy = sinon.spy();
        var maintenance = new Maintenance();

        maintenance.on('change', spy);

        maintenance.set({completed: true, order: 1});
        maintenance.set('title', 'my title');

        sinon.assert.calledTwice(spy);
    });

    it('should trigger an invalid event on failed validation', function() {
        var errorCallback = sinon.spy();
        var maintenance = new Maintenance();

        maintenance.on('invalid', errorCallback);

        maintenance.save({ completed: 'unvalid completed value' });

        sinon.assert.calledOnce(errorCallback);
        sinon.assert.calledWithMatch(errorCallback, maintenance, 'Todo.completed must be a boolean value.');
        // Unless set {validate:true} to be called before set
        expect(maintenance.get('completed')).to.equal('unvalid completed value');
    });
});
