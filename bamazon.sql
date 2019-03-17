DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
item_id INTEGER NOT NULL auto_increment,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL (7,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone XR", "Smart Phones", 749.00, 10),
("Samsung Galaxy S10", "Smart Phones", 999.99, 10),
("Huawei Mate 10 Pro", "Smart Phones", 799.00, 2),
("iPad Pro", "Tablets", 999.00, 10),
("Samsung Galaxy Tab S4", "Tablets", 549.99, 8),
("Microsoft Surface Pro 6", "Tablets", 799.00, 8),
("MacBook Pro", "Notebooks", 2399.00, 8),
("Dell XPS 13", "Notebooks", 899.99, 6),
("Acer Swift 7", "Notebooks", 1699.99, 6),
("Asus ZenBook Pro", "Notebooks", 1799.99, 6);
