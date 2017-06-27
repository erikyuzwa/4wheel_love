
'use strict';

// Load module
const mysql = require('mysql');
const yamlConfig = require('node-yaml-config');
const path = require('path');

let config = yamlConfig.load(path.resolve(__dirname, '../../config.yml'));

// Initialize pool of MySQL connections.
// This could potentially be abstracted into a Provider to provide support for other databases like that Microsoft one
let Pool = mysql.createPool({
    connectionLimit : config.database.connection_pool_size,
    host     : config.database.host,
    user     : config.database.user,
    password : config.database.password,
    database : config.database.db,
    debug    : true
});

module.exports = Pool;
