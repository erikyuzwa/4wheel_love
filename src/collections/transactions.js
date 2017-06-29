
// transactions.js
// this object tracks the transaction data
'use strict';
import _  from 'underscore';
import { Collection } from 'backbone';
import Transaction from '../models/transaction';
import db from '../database/db.js';
import Promise from 'bluebird';

class Transactions extends Collection {
	constructor(models, options){

		super(models, options);

		this.model = Transaction;
	}

	// override the Backbone fetch in order to go against our database backend
	fetch(options) {

	  return new Promise(function(resolve, reject) {

      db.getAllFromTable('transactions', function(data) {
        console.log(data);
        resolve(data);
      }, function(error) {
        reject(error);
      });

    });

  }

}

export default Transactions;
