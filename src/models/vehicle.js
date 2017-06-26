
// vehicle.js
'use strict';

let Backbone = require('backbone');

let Vehicle = Backbone.Model.extend ({
   defaults: {
      make: '',
      model: '',
      year: 0,
      fuelType: 0
   },

   initialize: function() {

   }

});

module.exports = Vehicle;
