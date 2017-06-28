
// vehicle.js
'use strict';

let Backbone = require('backbone');
let db = require('../database/db.js');

let Vehicle = Backbone.Model.extend ({

   defaults: {
      make: '',
      model: '',
      year: 0,
      fuelType: 0
   },

   initialize: function() {

   },

   /*
   save: function(attrs, options) {
    options.patch = true;
    // Proxy the call to the original save function
    Backbone.Model.prototype.save.call(this, attrs, options);
   }*/


});

module.exports = Vehicle;
