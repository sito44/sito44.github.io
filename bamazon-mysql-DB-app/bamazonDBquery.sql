CREATE DATABASE bamazon;
USE bamazon;
    CREATE TABLE products
(
    id int auto_increment not null,
    product_name varchar (40) not null,
    department_name varchar (40) not null,
    price decimal (5.2) not null,
    stock_quantity integer (100),
    primary key (id)
);
INSERT INTO products
    (product_name,department_name,price,stock_quantity)
VALUES
    ('acoustic guitar', 'music', 149.99, 15),
    ('canon camera', 'electronics', 299, 10),
    ('leather jacket', 'clothing', 95, 20),
    ('coffe machine', 'appliances', 59, 30),
    ('android phone', 'electronics', 99, 40),
    ('toaster', 'appliances', 49.95, 50),
    ('sunglasses', 'clothing', 114, 20),
    ('bongos', 'music', 69.99, 15),
    ('ukulele', 'music', 116.99, 10),
    ('gaming controller', 'electronics', 19.99, 20);