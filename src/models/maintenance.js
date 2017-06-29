
// maintenance.js
'use strict';

import { Model } from 'backbone';
import db from '../database/db.js';

class Maintenance extends Model {

   defaults() {
      return {
         type: '',
         description: ''
      };
   }


   /*
   save: function(attrs, options) {
    options.patch = true;
    // Proxy the call to the original save function
    Backbone.Model.prototype.save.call(this, attrs, options);
   }*/
}

export default Maintenance;
