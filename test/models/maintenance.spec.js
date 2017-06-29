
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
});
