
var mysql = require('mysql');
//var yamlConfig = require('node-yaml-config');
var pool = require('./pool.js');

//var config = yamlConfig.load(__dirname + '/../config.yml');

//console.log(config);

module.exports.getVehicles = function (callback) {

    //callback({vehicles: []});


    /*
    pool.getConnection(function(err,connection) {
        if (err) {
          callback(true);
          return;
        }
        connection.query(query,function (err,results) {
            connection.release();
            if (!err) {
                callback(false, {rows: results});
            }
            // check null for results here
        });
        connection.on('error', function(err) {
              callback(true);
        });
    });*/
};

module.exports.createVehicle = function (data, callback) {

    console.log('createNewVehicle');
    console.log(data);
    callback({vehicle: {

    }});

    /*
    pool.getConnection(function(err,connection) {
        if (err) {
          callback(true);
          return;
        }
        connection.query(query,function (err,results) {
            connection.release();
            if (!err) {
                callback(false, {rows: results});
            }
            // check null for results here
        });
        connection.on('error', function(err) {
              callback(true);
        });
    });*/
};


/*
var connection = mysql.createConnection({
  host: config.database.host + ':' + config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.db
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected...');
});*/

