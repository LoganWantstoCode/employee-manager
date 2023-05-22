INSERT INTO department (name)
VALUES ('Science'), ('Human Resources'), ('Development'), ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 100000, 4), ('Salesperson', 55000, 4), ('HR Manager', 90000, 2), ('Software Engineer', 120000, 3), ('Scientiesst', 145000, 1), ('Accountant', 100000, 2), ('Scrum Master', 110000, 3), ('Head Scientiest', 250000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Julio', 'Mendoza', 1, null), ('Logan', 'Nugget', 2, 1), ('Apple', 'Granny', 3, null), ('David', 'Peake', 4, 3), ('Sally', 'Clark', 5, null), ('Harrison', 'Walker', 6, 5), ('Fiji', 'Water', 7, null), ('Apex', 'Legend', 8, 7);