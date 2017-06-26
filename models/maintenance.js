
// maintenance.js
'use strict';

module.exports = class Maintenance {
   constructor(type, description) {
      this._id = 0;
      this._type = type;
      this._description = description;
   }

   // set the maintenance type for this item - oilchange, tirerotation, airfilter, batterycheck
   setType(type) {
     this._type = type;
   }

   setDescription(desc) {
      this._description = desc;
   }

   toString() {
       return 'some maintenance';
   }
};
