
var express = require('express');
var router = express.Router();
const path = require('path');


// TODO replace with the built version of our SDK

var Customer = require(path.resolve(__dirname, '../../src/models/customer.js'));
var Vehicle = require(path.resolve(__dirname, '../../src/models/vehicle.js'));
var Maintenance = require(path.resolve(__dirname, '../../src/models/maintenance.js'));
var Transaction = require(path.resolve(__dirname, '../../src/models/transaction.js'));

/* GET vehicles listing. */
router.get('/vehicles', function (req, res, next) {
  db.getAllFromTable('vehicles', function(data) {
    res.send(data);
  });

});

/* POST new vehicle */
router.post('/vehicles/new', function (req, res) {

    var newMake = req.body.new_make;
    var newModel = req.body.new_model;
    var newYear = req.body.new_year;

    // TODO need to implement some kind of security token system on all calls
    var token = req.body.token;

    db.newVehicle({'make': newMake, 'model': newModel, 'year': newYear}, function(data) {
      res.send(data);
    });
});

/* PUT updated vehicle info */
router.put('/vehicles/edit', function (req, res) {

    // TODO need to implement some kind of security token system on all calls
    var token = req.body.token;

    res.send('got a PUT request for vehicle');
});

/* DELETE vehicle */
router.delete('/vehicles/delete', function (req, res) {
    res.send('get a DELETE request for vehicle');
});

//=============================================================

/* GET maintenance listing */
router.get('/maintenance', function (req, res) {
  //res.send('get a listing of maintenance');
  db.getAllFromTable('maintenance', function(data) {
    res.send(data);
  });
});

/* POST new maintenance */
router.post('/maintenance/new', function (req, res) {
  res.send('Got a POST request for new maintenance');

});

/* PUT updated maintenance info */
router.put('/maintenance/edit', function (req, res) {
  res.send('get a PUT request for maintenance');
});

/* DELETE maintenance */
router.delete('/maintenance/delete', function (req, res) {
  res.send('get a DELETE request for maintenance');
});

//=============================================================

/* GET transactions listing */
router.get('/transactions', function (req, res) {
  db.getAllFromTable('transactions', function(data) {
    res.send(data);
  });
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
  db.getAllFromTable('customers', function(data) {
    res.send(data);
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
