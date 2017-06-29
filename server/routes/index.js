/**
 * The main idea behind the routes exposed here, is to function as a visual confirmation that our API endpoints
 * are working correctly.
 *
 * In a production environment, this entire module could / should be disabled to obviously prevent unauthorized
 * exposure of data.
 *
 */

const express = require('express');
const path = require('path');
let router = express.Router();

// TODO replace with path to our SDK
import Customers from '../../src/collections/customers.js';
import Maintenances from '../../src/collections/maintenances.js';
import Vehicles from '../../src/collections/vehicles.js';
import Transactions from '../../src/collections/transactions.js';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '4wheel love', host: 'localhost:3000' });
});

/* GET customers. */
router.get('/customers', function(req, res, next) {
  let customers = new Customers();
  customers.url = 'http://localhost:3000/api/customers';
  customers.fetch({
      success: function(customers, response) {
        res.render('customer', {title: 'Customers', items: response.data});
      }
  });

});

/* GET vehicles. */
router.get('/vehicles', function(req, res, next) {
  let vehicles = new Vehicles();
  vehicles.url = 'http://localhost:3000/api/vehicles';
  vehicles.fetch({
      success: function(vehicles, response) {
        console.log(response);
        res.render('vehicle', {title: 'Vehicles', items: response.data});
      }
  });
});

/* GET transactions. */
router.get('/transactions', function(req, res, next) {
  let transactions = new Transactions();
  transactions.url = 'http://localhost:3000/api/transactions';
  transactions.fetch({
      success: function(transactions, response) {
        console.log(response);
        res.render('transaction', {title: 'Transactions', items: response.data});
      }
  });

});

/* GET maintenance */
router.get('/maintenances', function(req, res, next) {
  let maintenances = new Maintenances();
  maintenances.url = 'http://localhost:3000/api/maintenances';
  maintenances.fetch({
      success: function(maintenances, response) {
        console.log(response);
        res.render('maintenance', {title: 'Maintenances', items: response.data});
      }
  });
});

module.exports = router;
