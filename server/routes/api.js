
/**
 * The main idea behind the routes exposed here, is to function as our exposed REST API for dealing with our
 * system.
 *
 * Once express parses our route (`/api/*`), we'll create a Model or Collection based on the route requested and
 * hand off our actual database querying via the Backbone sync functionality.
 *
 * We are doing a hybrid of sorts from a "pure" REST implementation...I usually prefer the API design of the resource
 * endpoint being on the Url, with identifiers sent via the body such as resource_id, etc. with any given security
 * tokens being put right into HTTP headers
 *
 * TODO
 * - we should integrate some kind of token system to control rate limits for requests, etc.
 *
 */
'use strict';

const express = require('express');
let router = express.Router();
const path = require('path');

// TODO replace with the built version of our SDK
import Customer from '../../src/models/customer';
import Vehicle from '../../src/models/vehicle';
import Maintenance from '../../src/models/maintenance';
import Transaction from '../../src/models/transaction';


import Customers from '../../src/collections/customers';
import Maintenances from '../../src/collections/maintenances';
import Transactions from '../../src/collections/transactions';
import Vehicles from '../../src/collections/vehicles';

/* GET vehicles listing. */
router.get('/vehicles', function (req, res, next) {

  let vehicles = new Vehicles();

  vehicles.fetch({
    success: function(data) {
      res.send(data);
    }
  });

});

/* POST new vehicle */
router.post('/vehicles/new', function (req, res) {

    let newMake = req.body.make;
    let newModel = req.body.model;
    let newYear = req.body.year;

    let newVehicle = new Vehicle({
      make: newMake,
      model: newModel,
      year: newYear
    });

    newVehicle.save();

});

/* PUT updated vehicle info */
router.put('/vehicles/edit', function (req, res) {

    let vehicleId = req.body.vehicle_id;

    res.send('got a PUT request for vehicle');
});

/* DELETE vehicle */
router.delete('/vehicles/delete', function (req, res) {
    res.send('get a DELETE request for vehicle');
});

//=============================================================

/* GET maintenance listing */
router.get('/maintenances', function (req, res) {

  let maintenances = new Maintenances();
  maintenances.fetch({
      success: function(maintenances, response) {
          res.send(response);
      }
  });

});

/* POST new maintenance */
router.post('/maintenances/new', function (req, res) {
  res.send('Got a POST request for new maintenance');

});

/* PUT updated maintenance info */
router.put('/maintenances/edit', function (req, res) {
  res.send('get a PUT request for maintenance');
});

/* DELETE maintenance */
router.delete('/maintenances/delete', function (req, res) {
  res.send('get a DELETE request for maintenance');
});

//=============================================================

/* GET transactions listing */
router.get('/transactions', function (req, res) {

});

/* POST new transaction */
router.post('/transactions/new', function (req, res) {
  res.send('Got a POST request for new transaction');

});

/* PUT updated transaction info */
router.put('/transactions/edit', function (req, res) {
  res.send('get a PUT request for transaction');
});

/* DELETE transaction */
router.delete('/transactions/delete', function (req, res) {
  res.send('get a DELETE request for transactions');
});

//=============================================================

/* GET customers listing */
router.get('/customers', function (req, res) {

  let customers = new Customers();
  return customers.fetch({
      success: function(customers, response) {
          res.send(response);
      }
  });

});

/* POST new customer */
router.post('/customers/new', function (req, res) {
  res.send('Got a POST request for new customer');

});

/* PUT updated customer info */
router.put('/customers/edit', function (req, res) {
  res.send('get a PUT request for customer');
});

/* DELETE customer */
router.delete('/customers/delete', function (req, res) {
  res.send('get a DELETE request for customer');
});

module.exports = router;
