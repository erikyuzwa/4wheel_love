
// maintenance.js
'use strict';

let Backbone = require('backbone');

let Maintenance = Backbone.Model.extend ({
   defaults: {
      type: '',
      description: ''
   },

   initialize: function() {

   }
});

module.exports = Maintenance;
