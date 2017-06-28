

// customer.js
// this object tracks the customer data
'use strict';

let Backbone = require('backbone');

let Customer = Backbone.Model.extend ({

   defaults: {
      vehicleId: 0,
      firstName: '',
      lastName: ''
   },

   initialize: function() {

   }
});

module.exports = Customer;
