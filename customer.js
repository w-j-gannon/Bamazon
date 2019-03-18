// requirements
//require("dotenv").config();

var mysql = require("mysql");

var inquirer = require("inquirer");

var keys = require("./keys.js");

// mysql server connection 
var connection = mysql.createConnection ({
    host: "localhost",

    port: 3306,

    user: "root",

    //password: keys.sql.password,
    password: "MinkNoidOink",

    database: "bamazon_DB"
});

// check connection, start readStock;
connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to the Bamazon!\n");
    readStock();
});

// read database and display items for sale
function readStock() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw (err);
        console.log("Items for sale:\n");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
        }
        console.log("\n-----------------------------------\n");
        transaction();
    })
};

// prompt customer for sale, go through transaction, end connection after
function transaction() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "item",
                message: "Enter the ID of the item you would like to purchase.",
                validate: function(value) {
                    if (isNaN(value) == false) {
                        return true
                    } else {
                        return false;
                    }
                }
            }, {
                type: "input",
                name: "quantity",
                message: "Enter quantity.",
                validate: function(value) {
                    if (isNaN(value) == false) {
                        return true
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(function(sale) {
            var orderQuantity = parseInt(sale.quantity);
            var orderId = sale.item;
            // pick item and select data
            connection.query(
                "SELECT stock_quantity, price FROM products WHERE ?", [{
                    item_id: orderId
                }], function(err, res) {
                    if (err) throw (err);
                    // if enough stock, set new amount & run updateStock. Log sale amount
                    var price = res[0].price;
                    if (orderQuantity <= res[0].stock_quantity) {
                        var newQuantity = res[0].stock_quantity - orderQuantity;
                        var salePrice = orderQuantity * price;
                        updateStock(newQuantity, orderId);
                        console.log("\nSale complete. You will be charged $ " + salePrice + ".\n")

                        // ask for another transaction
                        inquirer
                            .prompt([
                                {
                                    type: "list",
                                    name: "resale",
                                    message: "Would you like to make another purchase?",
                                    choices: ["yes", "no"]
                                }
                            ]).then(function(answer) {

                                // yes, rerun list and prompts
                                if (answer.resale === "yes") {
                                    readStock();

                                // no, goodbye and end connection
                                } else {
                                    console.log("\nThank you for visiting Bamazon." );
                                    connection.end();
                                }
                            })
                    // if not enough stock, try again
                    } else {
                        console.log("\nSorry, low stock. Try a lower quantity or select another item.\n");
                        transaction();
                    }
                }
            )
        })
};

// update database after sale
function updateStock(newQuantity, orderId) {
    connection.query(
        "UPDATE products SET ? WHERE ?", [
            {
                stock_quantity: newQuantity
            },{
                item_id: orderId
            }
        ], function(err, res) {
            if (err) throw (err);
        }
    )
};
