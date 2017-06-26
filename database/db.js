
'use strict';
var mysql = require('mysql');
var pool = require('./pool.js');

module.exports.getAllFromTable = function (tableName, callback) {

    if (!tableName) {
        return;
    }

    pool.getConnection(function(err, connection) {
        if (err) {
          callback(true);
          return;
        }

        connection.query('select * from ' + tableName, function (err, results) {
            console.log(results);
            connection.release();
            if (!err) {
                callback({data: results});
            }
            // TODO check null for results here
        });
        connection.on('error', function(err) {
              callback(true);
        });
    });

};

module.exports.newVehicle = function (data, callback) {

    console.log('newVehicle');
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



