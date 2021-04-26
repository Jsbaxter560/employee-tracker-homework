const mysql = require('mysql'); // establish dependency on mysql
const inquirer = require('inquirer'); // establish dependency on inquirer
const fs = require('fs'); // establish dependency on fs
const { restoreDefaultPrompts } = require('inquirer');

const connection = mysql.createConnection({ // create connectin 
    host: 'localhost', // establish local host
    port: 3306, // establish port
    user: 'root', // username
    password: 'password', // password
    database: 'trackerDB', // connect to database
});

const start = () => { // prompt to ask user what they would like to do
    inquirer
        .prompt({
            name: 'whatToDo',
            type: 'list',
            message: 'Would you like to do?',
            choices: ['ADD', 'VIEW', 'UPDATE ROLE', 'EXIT'],
        })
        .then((answer) => {
            if (answer.whatToDo === 'ADD') {
                addPrompt();
            } else if (answer.whatToDo === 'VIEW') {
                viewPrompt();
            } else if (answer.whatToDo === 'UPDATE ROLE') {
                updatePrompt();
            } else {
                connection.end();
            }
        });
};

const addPrompt = () => { // prompt to ask user what they would like to add
    inquirer
        .prompt({
            name: 'whatToAdd',
            type: 'list',
            message: 'What would you like to add?',
            choices: ['DEPARTMENT', 'ROLE', 'EMPLOYEE'],
        })
        .then((answer) => {
            if (answer.whatToAdd === 'DEPARTMENT') {
                departmentPrompt();
            } else if (answer.whatToAdd === 'ROLE') {
                rolePrompt();
            } else if (answer.whatToAdd === 'EMPLOYEE') {
                employeePrompt();
            }
        });
};

const updatePrompt = () => {
    inquirer
        .prompt({
            name: 'whatToUpdate',
            type: 'list',
            message: 'What would you like to update?',
            choices: ['DEPARTMENT', 'ROLE', 'EMOLOYEE'],
        })
        .then((answer) => {
            if (answer.whatToUpdate === 'DEPARTMENT') {
                departmentUpdate();
            } else if (answer.whatToAdd === 'ROLE') {
                roleUpdate();
            } else if (answer.whatToUpdate === 'EMPLOYEE') {
                employeeUpdate();
            }
        })
};