const mysql = require('mysql'); // establish dependency on mysql
const inquirer = require('inquirer'); // establish dependency on inquirer
const fs = require('fs'); // establish dependency on fs

const connection = mysql.createConnection({ // create connectin 
    host: 'localhost', // establish local host
    port: 3306, // establish port
    user: 'root', // username
    password: 'password', // password
    database: 'trackerDB', // connect to database
});

connection.connect((err) => {
    if (err) throw err;
    console.table(departments);
    connection.end();
  });

