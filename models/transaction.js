
// transaction.js
// this object tracks the "work transaction" - we're creating an entity that links together the type of
// maintenance, customer and vehicle. We'll also track the odometer reading here as well as a status
// of the state of this "work request"...
'use strict';

module.exports = class Transaction {
   constructor() {
      this._id = 0;
      this._maintenanceId = 0;
      this._vehicleId = 0;
      this._customerId = 0;

      this._creationDate = new Date.now();

      this._status = '';
      this._paymentTransactionId = '';

      this._odo = 0;
   }

   // set the payment id returned from our payment provider - like Stripe, etc.
   setPaymentTransactionId(trans) {
     this._paymentTransactionId = trans;
   }

   // set the status
   setStatus(status) {
     this._status = status;
   }

   toString() {
       return 'some transaction';
   }
};
