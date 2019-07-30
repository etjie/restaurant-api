const mysql = require('mysql');
import config from '../config';

const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    insecureAuth: true
});

connection.connect();

module.exports = connection;