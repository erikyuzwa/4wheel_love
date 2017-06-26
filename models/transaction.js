
// transaction.js
// this object tracks the maintenance item, vehicle item and invoice status
'use strict';

module.exports = class Transaction {
   constructor() {
      this._id = 0;
      this._maintenanceId = 0;
      this._vehicleId = 0;



   }

   // set the payment id returned from our payment provider - like Stripe, etc.
   setPaymentTransactionId(trans) {
     this._transactionId = trans;
   }

   // set the status
   setStatus(status) {
     this._status = status;
   }

   toString() {
       return 'some transaction';
   }
};
