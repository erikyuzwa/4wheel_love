// maintenances.js
// this object tracks the maintenance collection
'use strict';

import _  from 'underscore';
import { Collection } from 'backbone';
import Maintenance from '../models/customer';
import db from '../database/db.js';
import Promise from 'bluebird';

class Maintenances extends Collection {

	constructor(models, options){

		super(models, options);

		this.model = Maintenance;
	}

	// override the Backbone fetch in order to go against our database backend
	fetch(options) {

	  return new Promise(function(resolve, reject) {

      db.getAllFromTable('maintenances', function(data) {
        console.log(data);
        resolve(data);
      }, function(error) {
        reject(error);
      });

    });

  }
}

export default Maintenances;
