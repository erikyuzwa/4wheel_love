
'use strict';

// Load module
var mysql = require('mysql');
var yamlConfig = require('node-yaml-config');
var config = yamlConfig.load(__dirname + '/../config.yml');

console.log(config);

// Initialize pool
var pool = mysql.createPool({
    connectionLimit : 10,
    host     : config.database.host + ':' + config.database.port,
    user     : config.database.user,
    password : config.database.password,
    database : config.database.db,
    debug    : false
});

module.exports = pool;
