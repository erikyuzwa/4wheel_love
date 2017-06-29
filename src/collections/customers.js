
// customer.js
// this object tracks the customer data
'use strict';

import { Collection } from 'backbone';
import Customer from '../models/customer';
import db from '../database/db.js';

class Customers extends Collection {
	constructor(models, options){

		super(models, options);

		this.model = Customer;
	}

	fetch(options) {

	  return new Promise(function(resolve, reject) {

	    // override the Backbone fetch in order to go against our database backend
      db.getAllFromTable('customers', function(data) {
        console.log('customers response');
        console.log(data);
        resolve(data);
      }, function(error) {
        reject(error);
      });

    });



    //Call Backbone's fetch
    //return Backbone.Collection.prototype.fetch.call(this, options);
  }

}

export default Customers;
