
'use strict';
import {mocha} from '../../node_modules/mocha/mocha';
import {sinon} from '../../node_modules/sinon/lib/sinon';
import {expect} from 'chai';
import Pool from '../../src/database/pool';

describe('Pool spec tests', function () {
    it('should create global variables for Pool', function () {
        expect(Pool).to.exist;
    });

});
