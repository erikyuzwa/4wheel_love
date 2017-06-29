

// customer.js
// this object tracks the customer data
'use strict';

import { Model } from 'backbone';
import db from '../database/db.js';

class Customer extends Model {

   defaults() {
      return {
         vehicleId: 0,
         firstName: '',
         lastName: ''
      };
   }
}

export default Customer;

