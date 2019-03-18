# Bamazon
A CLI app used to search for and "buy" available products. Inventory is tracked with a MySQL database run on a local server.

## Technology used

* [node.js](https://nodejs.org/en/)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [MySQL](https://www.npmjs.com/package/mysql)

## Setup

 - Clone the repo then run `npm install` to download the dependencies.
 - Using MySQL workbench, open a local server and run the bamazon.sql schema to create your inventory database.

 ## Run the program

 #### Customer View

 - `node customer`

Once opened in the console, Bamazon will display the available stock and prompt for an item and quantity.

 ![choose item](https://github.com/w-j-gannon/Bamazon/blob/master/images/readme1.PNG)

If you ask for more than is in stock, Bamazon will ask you to pick again.

![Low Stock](https://github.com/w-j-gannon/Bamazon/blob/master/images/readme3.PNG)

And if there are enough items in stock the sale will be executed. You may then buy another item or exit Bamazon.

![try again](https://github.com/w-j-gannon/Bamazon/blob/master/images/readme2.PNG)

 

