// requirements
require("dotenv").config();

var mysql = require("mysql");

var inquirer = require("inquirer");

var keys = require("./keys.js");

// mysql server connection 
var connection = mysql.createConnection ({
    
    host: keys.sql.db_host,
    port: 3306,
    user: keys.sql.db_user,
    password: keys.sql.password,
    database: keys.sql.db_name
});

// check connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the Bamazon Server");
});
