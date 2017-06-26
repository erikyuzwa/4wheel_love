
// maintenance.js
'use strict';

module.exports = class Maintenance {
   constructor() {
      this._id = 0;
      this._vehicleId = 0;
      this._startDate;
      this._endDate;

   }

   // set the maintenance type for this item - oilchange, tirerotation, airfilter, batterycheck
   setType(type) {
     this._fuelType = type;
   }

   toString() {
       return 'some maintenance';
       //console.log(this._make + ' ' + this._model + ' ' + this._year);
   }
};
