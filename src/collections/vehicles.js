
// vehicles.js
// this object tracks the vehicle data
'use strict';
import _  from 'underscore';
import { Collection } from 'backbone';
import Vehicle from '../models/vehicle';
import db from '../database/db.js';

class Vehicles extends Collection {

	constructor(models, options){

		super(models, options);

		this.model = Vehicle;
	}

	fetch(options) {

    // override the Backbone fetch in order to go against our database backend
    db.getAllFromTable('vehicles', function(data) {

    });

    //Call Backbone's fetch
    //return Backbone.Collection.prototype.fetch.call(this, options);
  }

}

export default Vehicles;
