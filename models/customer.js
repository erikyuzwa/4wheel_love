

// customer.js
// this object tracks the customer data
'use strict';

module.exports = class Customer {
   constructor(firstName, lastName) {
      this._id = 0;
      this._vehicleId = 0;
      this._firstName = firstName;
      this._lastName = lastName;

   }

   toString() {
       return this._firstName + ' ' + this._lastName;
   }
};

