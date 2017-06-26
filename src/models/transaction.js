
// transaction.js
// this object tracks the "work transaction" - we're creating an entity that links together the type of
// maintenance, customer and vehicle. We'll also track the odometer reading here as well as a status
// of the state of this "work request"...
'use strict';

let Backbone = require('backbone');

let Transaction = Backbone.Model.extend ({
   defaults: {
      maintenanceId: 0,
      vehicleId: 0,
      customerId: 0,
      creationDate: Date.now(),
      status: '',
      paymentTransactionId: '',
      odo: 0
   },

   initialize: function() {

   }
});

module.exports = Transaction;
