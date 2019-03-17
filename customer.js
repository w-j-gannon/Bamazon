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

// check connection, start readStock;
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the Bamazon Server\n");
    readStock();
});

// read database and display items for sale
function readStock() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw (err);
        console.log("Items for sale:\n");
        for (var i = 0; i < res.length; i++) {
            console.log(res.item_id[i] + " | " + res.product_name[i] + " | $" + res.price[i]);
        }
        transaction();
    })
};

// prompt customer for sale, go through transaction, end connection after
function transaction() {
    
};

// update database after sale
function updateStock() {

};
