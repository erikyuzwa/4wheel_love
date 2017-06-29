// maintenances.js
// this object tracks the maintenance collection
'use strict';

import _  from 'underscore';
import { Collection } from 'backbone';
import Maintenance from '../models/customer';
import db from '../database/db.js';

class Maintenances extends Collection {

	constructor(models, options){

		super(models, options);

		this.model = Maintenance;
	}

	fetch(options) {

    // override the Backbone fetch in order to go against our database backend
    db.getAllFromTable('maintenances', function(data) {

    });

    //Call Backbone's fetch
    //return Backbone.Collection.prototype.fetch.call(this, options);
  }
}

export default Maintenances;
