const mysql = require('mysql'); // establish dependency on mysql
const inquirer = require('inquirer'); // establish dependency on inquirer

const connection = mysql.createConnection({ // create connectin 
    host: 'localhost', // establish local host
    port: 3306, // establish port
    user: 'root', // username
    password: 'password', // password
  database: 'trackerDB', // connect to
});

