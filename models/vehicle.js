
// vehicle.js
'use strict';

module.exports = class Vehicle {
   constructor(autoMake, autoModel, autoYear) {
      this._id = 0;
      this._make = autoMake;
      this._model = autoModel;
      this._year = autoYear;

      this._fuelType = 'gas';
      this._odo = '142001';
   }

   // set the fuel type for this vehicle - gas, electric, diesel
   setFuelType(type) {
     this._fuelType = type;
   }

   toString() {
       return this._make + ' ' + this._model + ' ' + this._year;
   }
};
