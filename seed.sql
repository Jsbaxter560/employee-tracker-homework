INSERT INTO department (depName)
VALUES ("Engineering");

INSERT INTO department (depName)
VALUES ("Legal");

INSERT INTO department (depName)
VALUES ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 9);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 9);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 8);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 7);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 8);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 6);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 225000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John ", "Baxter", 8, 11);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Arthur ", "Salmon", 7, 12);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dylan ", "Surls", 6, 13);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Whitney ", "Wong", 6, 14);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matthew", "Calhoun", 9, 15);