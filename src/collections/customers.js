
// customer.js
// this object tracks the customer data
'use strict';

import { Collection } from 'backbone';
import Customer from '../models/customer';
import db from '../database/db.js';
import Promise from 'bluebird';

class Customers extends Collection {
	constructor(models, options){

		super(models, options);

		this.model = Customer;
	}

	// override the Backbone fetch in order to go against our database backend
	fetch(options) {

	  return new Promise(function(resolve, reject) {

      db.getAllFromTable('customers', function(data) {
        console.log(data);
        resolve(data);
      }, function(error) {
        reject(error);
      });

    });

  }

}

export default Customers;
