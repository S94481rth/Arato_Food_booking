
create database arato;
use arato;

create table customer(
	id int auto_increment primary key,
    name varchar(20),
    city varchar(20),
    phno varchar(12)
);

select * from customer;


-- Hotel Table
CREATE TABLE Hotel (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  phno VARCHAR(15)
);

-- Cuisine Table
CREATE TABLE Cuisine (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Food Table
CREATE TABLE Food (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cuisine_id INT,
  hotel_id INT,
  FOREIGN KEY (cuisine_id) REFERENCES Cuisine(id) ON DELETE CASCADE,
  FOREIGN KEY (hotel_id) REFERENCES Hotel(id) ON DELETE CASCADE
);

-- Order Table
CREATE TABLE Orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  hotel_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE,
  FOREIGN KEY (hotel_id) REFERENCES Hotel(id) ON DELETE CASCADE
);

-- Order_Food Table
CREATE TABLE Order_Food (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  food_id INT,
  FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE,
  FOREIGN KEY (food_id) REFERENCES Food(id) ON DELETE CASCADE
);

INSERT INTO Customer (name, city, phno) VALUES
('John Doe', 'New York', '123-456-7890'),
('Alice Smith', 'Los Angeles', '987-654-3210'),
('Bob Johnson', 'Chicago', '555-123-4567');

-- Insert data into Hotel table
INSERT INTO Hotel (name, city, phno) VALUES
('Luxury Inn', 'New York', '555-111-2222'),
('Sunset Lodge', 'Los Angeles', '888-333-4444'),
('City Suites', 'Chicago', '999-666-7777');

-- Insert data into Cuisine table
INSERT INTO Cuisine (name) VALUES
('Italian'),
('Mexican'),
('Japanese');

-- Insert data into Food table
INSERT INTO Food (name, cuisine_id, hotel_id) VALUES
('Spaghetti Bolognese', 1, 1),
('Taco Supreme', 2, 2),
('Sushi Roll', 3, 3),
('Margherita Pizza', 1, 1);

-- Insert data into Order table
INSERT INTO Orders (customer_id, hotel_id) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Insert data into Order_Food table
INSERT INTO Order_Food (order_id, food_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4);