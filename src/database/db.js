
'use strict';
const mysql = require('mysql');
let Pool = require('./pool');

module.exports.getAllFromTable = function (tableName, callback) {

    if (!tableName) {
        return;
    }

    Pool.getConnection(function(err, connection) {
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
