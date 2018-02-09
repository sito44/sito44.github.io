const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) {
        throw err;
    }
    managerPrompt();
});

function managerPrompt() {
    inquirer.prompt([{
            name: 'managerTasks',
            message: 'Choose an option \n \n',
            type: 'list',
            choices: [
                'View Products for Sale',
                'View Low Inventory',
                'Add to Inventory',
                'Add New Product'
            ]
        }

    ]).then(function (answer) {

        switch (answer.managerTasks) {
            case 'View Products for Sale':
                viewProducts();
                break;
            case 'View Low Inventory':
                viewLowInv();
                break;
            case 'Add to Inventory':
                addToInv();
                break;
            case 'Add New Product':

                break;
        }
    });
}



function viewProducts() {
    connection.query('SELECT id, product_name, price, stock_quantity FROM bamazon.products ',
        function (err, res) {
            if (err) {
                throw err;
            }
            console.table('Bamazon Products for Sale', res);
        });
}

function viewLowInv() {
    connection.query('SELECT product_name, stock_quantity FROM bamazon.products WHERE stock_quantity < 5 ',
        function (err, res) {
            if (err) {
                throw err;
            }
            console.table('Bamazon Low Inventory', res);
        });
}

function addToInv() {
    let currentInv;  
    connection.query('SELECT id, product_name, stock_quantity FROM bamazon.products ',
        function (err, res) {
            if (err) {
                throw err;
            }
            console.table('Current Inventory', res);
            currentInv = res;
        });
        inquirer.prompt([
            {
                name: 'itemID',
                message: 'Select the product id you would like to add inventory to',
                type: 'input'
            },
            {
                name: 'quantity',
                message: 'Input the quantity you want to add to the product inventory',
                type: 'input'
            }
        ]).then(function (answer) {
            let itemId = parseInt(answer.itemID);
            let quant = parseInt(answer.quantity);
            let currentItem = currentInv[itemId - 1].stock_quantity;
            
            connection.query(`UPDATE products SET stock_quantity = ${currentItem + quant} WHERE id = ${itemId}`,
                function (err, res) {
                    if (err) {
                        throw err;
                    }
                    console.table('Updated Inventory', res);
                    connection.end();
                });
        });
}

function addNewProduct() {

}