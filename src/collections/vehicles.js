
// vehicles.js
// this object tracks the vehicle data
'use strict';
import _  from 'underscore';
import { Collection } from 'backbone';
import Vehicle from '../models/vehicle';
import db from '../database/db.js';
import Promise from 'bluebird';

class Vehicles extends Collection {

	constructor(models, options){

		super(models, options);

		this.model = Vehicle;
	}

	// override the Backbone fetch in order to go against our database backend
	fetch(options) {

	  return new Promise(function(resolve, reject) {

      db.getAllFromTable('vehicles', function(data) {
        console.log(data);
        resolve(data);
      }, function(error) {
        reject(error);
      });

    });

  }

}

export default Vehicles;
