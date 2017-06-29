
// transactions.js
// this object tracks the transaction data
'use strict';
import _  from 'underscore';
import { Collection } from 'backbone';
import Transaction from '../models/transaction';
import db from '../database/db.js';

class Transactions extends Collection {
	constructor(models, options){

		super(models, options);

		this.model = Transaction;
	}

	fetch(options) {

    // override the Backbone fetch in order to go against our database backend
    db.getAllFromTable('transactions', function(data) {

    });

    //Call Backbone's fetch
    //return Backbone.Collection.prototype.fetch.call(this, options);
  }

}

export default Transactions;
