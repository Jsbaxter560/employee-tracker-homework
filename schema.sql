DROP DATABASE IF EXISTS trackerDB;  -- DROP DATABASE IF IT ALREADY EXISTS
CREATE DATABASE trackerDB;  -- CREATE THE DATABASE
USE trackerDB; -- USE THE DATABASE

CREATE TABLE department ( -- create department table
    id INT (11) NOT NULL AUTO_INCREMENT,
    depName VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role ( -- create role table
    id INT (11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee ( -- create employee table
    id INT (11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

