
'use strict';

// Load module
var mysql = require('mysql');
var yamlConfig = require('node-yaml-config');
var config = yamlConfig.load(__dirname + '/../config.yml');

// Initialize pool of MySQL connections.
// This could potentially be abstracted into a Provider to provide support for other databases like that Microsoft one
var pool = mysql.createPool({
    connectionLimit : config.database.connection_pool_size,
    host     : config.database.host,
    user     : config.database.user,
    password : config.database.password,
    database : config.database.db,
    debug    : true
});

module.exports = pool;
