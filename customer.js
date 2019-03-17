// requirements
require("dotenv").config();

var mysql = require("mysql");

var inquirer = require("inquirer");

var keys = require("./keys.js");

// mysql server connection 
var connection = mysql.createConnection ({
    host: "localhost",

    port: 3306,

    user: "root",

    password: keys.sql.password,

    database: "bamazon_DB"
});

// check connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the Bamazon Server\n");
});
