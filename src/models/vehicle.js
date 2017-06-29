
// vehicle.js
'use strict';

import { Model } from 'backbone';
import db from '../database/db.js';

class Vehicle extends Model {

   defaults() {
      return {
         make: '',
         model: '',
         year: 0,
         fuelType: 0
      };
   }

   /*
   save: function(attrs, options) {
    options.patch = true;
    // Proxy the call to the original save function
    Backbone.Model.prototype.save.call(this, attrs, options);
   }*/

}

export default Vehicle;
