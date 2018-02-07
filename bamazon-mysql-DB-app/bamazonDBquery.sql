create database bamazon;
use bamazon;
create table products
(
    id int auto_increment not null,
    product_name varchar (40) not null,
    department_name varchar (40) not null,
    price decimal (5.2) not null,
    stock_quantity integer (100),
    primary key (id)
);