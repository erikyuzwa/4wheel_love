
var express = require('express');
var router = express.Router();
var db = require('../database/db.js');
var Vehicle = require('../models/vehicle.js');
var Maintenance = require('../models/maintenance.js');
var Transaction = require('../models/transaction.js');


var test = new Vehicle('toyota', 'sienna', '2004');
console.log(test.toString());

/* GET vehicles listing. */
router.get('/vehicles', function (req, res, next) {
  db.getVehicles(function(data) {
    res.send(data);
  });

});

/* POST new vehicle */
router.post('/vehicles/new', function (req, res) {
  //res.send('Got a POST request for new vehicle');
  db.createVehicle({'model': 'sienna', 'year': '2014'}, function(data) {
    res.send(data);
  });
});

/* PUT updated vehicle info */
router.put('/vehicles/edit', function (req, res) {
  res.send('got a PUT request for vehicle');
});

/* DELETE vehicle */
router.delete('/vehicles/delete', function (req, res) {
  res.send('get a DELETE request for vehicle');
});

/* GET maintenance listing */
router.get('/maintenance', function (req, res) {
  res.send('get a listing of maintenance');
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

/* GET transactions listing */
router.get('/transactions', function (req, res) {
  res.send('get a listing of transactions');
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


module.exports = router;
