
// maintenance.js
'use strict';

let Backbone = require('backbone');
let db = require('../database/db.js');

let Maintenance = Backbone.Model.extend ({

   defaults: {
      type: '',
      description: ''
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

module.exports = Maintenance;
