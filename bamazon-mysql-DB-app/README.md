# Bamazon-mysql-App

![Image of mysql](https://mc.qcloudimg.com/static/img/2742c21902443c72d3b0e198b7c49efb/MySQL.png)

## Description

Terminal based Node application that runs client and administrative online retail utilities which uses mysql for the DataBase.

## Technologies
- Javascript
- Node.js
- mysql

## Getting Started

1. Run npm install in root directory of project to acquire dependencies.
2. Change host,port,user, and password values to your personal mysql DB information in const connection in all application js scripts. 
3. Run node bamazonDBquery.sql in mysql workbench to create DB in mysql Workbench. (Optional: Run bamazonDBworkSheetV2.csv in mysql workbench import wizard after creating table if you would like to add more products to DB without writing mysql code. Make sure column heads align with data type and category when prompted)
4. Run node bamazonCustomer.js for client side functionality or node bamazonManager.js for administrative functionality in terminal.

## Video Link
 
https://drive.google.com/file/d/14Y8FCvTmNXrdNvCTEHCXNe9foHcV4dT1/view?usp=sharing