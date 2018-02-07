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
    connection.query('SELECT id, product_name, price FROM bamazon.products ',
        function (err, res) {
            if (err) {
                throw err;
            }
            console.table('Bamazon items for Sale', res);
        });
    customerPrompt();
});

function customerPrompt() {
    inquirer.prompt([{
            name: 'productID',
            message: 'Input the product id of the item you would like to purchase \n \n',
            type: 'input'
        },
        {
            name: 'quantity',
            message: 'Input the quantity of your order',
            type: 'input'
        }
    ]).then(function (answers) {
        const orderQuantity = parseInt(answers.quantity);
        const pID = parseInt(answers.productID);
        connection.query(`SELECT stock_quantity,price FROM bamazon.products WHERE id=${pID}`,
            function (err, res) {
                const stockQuantity = res[0].stock_quantity;
                const price = res[0].price;
                if (err) {
                    throw err;
                } else if (orderQuantity > stockQuantity) {
                    console.log(`Insufficient quantity!`);
                    connection.end();
                } else {
                    const quantityMath = stockQuantity - orderQuantity;
                    connection.query(`UPDATE products SET ? WHERE ?`, [{
                                stock_quantity: quantityMath
                            },
                            {
                                id: pID
                            }
                        ],
                        function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log(`
                    Order placed Successfully!
                    Total amount of purchase: $${price * orderQuantity}
                    `);
                            connection.end();
                        });
                }

            });
    });
}