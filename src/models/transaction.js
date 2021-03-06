
// transaction.js
// this object tracks the "work transaction" - we're creating an entity that links together the type of
// maintenance, customer and vehicle. We'll also track the odometer reading here as well as a status
// of the state of this "work request"...
'use strict';
import { Model } from 'backbone';
import db from '../database/db.js';

class Transaction extends Model {

   defaults() {
      return {
         maintenanceId: 0,
         vehicleId: 0,
         customerId: 0,
         creationDate: Date.now(),
         paymentDate: null,
         status: '',
         paymentTransactionId: '',
         odo: 0
      };
   }

   constructor(options) {
     super(options);
     this.listenTo(this, 'change:paymentTransactionId', this.processPayment);
   }

   // whenever our paymentTransactionId is updated, then set our paymentDate to Date.now
   // and our status to paid
   //
   // TODO - figure out some kind of audit system to ensure we can track every financial transaction to this Entity
   processPayment() {
     this.set({status: 'paid', paymentDate: Date.now()});
   }

   /*
   save: function(attrs, options) {
    options.patch = true;
    // Proxy the call to the original save function
    Backbone.Model.prototype.save.call(this, attrs, options);
   }*/
}

export default Transaction;
