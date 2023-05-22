const db = require("./db");
const inquirer = require("inquirer");
require("console.table");

loadPrompts();

function loadPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
    ])
    .then((response) => {
      let choice = response.choice;

      switch (choice) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          createNewRole();
          break;
          default:
            quit();
      }
    })
    .catch((error) => console.error("Oops", error));
}

function viewAllDepartments() {
  query("SELECT * FROM department;", (err, result) => {
    err ? console.log(err, "critical error") : console.table(result);
    loadPrompts();
  });
}

function viewAllRoles() {
  query("SELECT * FROM role;", (err, result) => {
    err ? console.log(err) : console.table(result);
    loadPrompts();
  });
}

function viewAllEmployees() {
  query("SELECT * FROM employee", (err, result) => {
    err ? console.log(err) : console.table(result);
    loadPrompts();
  });
}

function createNewRole() {
  findAllDepartments().then(([rows]) => {
    let departments = rows;
    const deptChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    prompt([
      {
        name: "title",
        message: "what is the name?",
      },
      {
        name: "salary",
        message: "what is the salary?",
      },
      {
        type: "list",
        name: "department_id",
        message: "what department is this for?",
        choices: deptChoices,
      },
    ]).then((role) => {
      createRole(role)
        .then(() => console.log(`${role.title} added`))
        .then(() => loadPrompts());
    });
  });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "What is the name of the department?",
    },
  ])
    .then((response) => {
      query(
        `INSERT INTO department (name) VALUES ('${response.departmentName}');`
      );
      viewAllDepartments();
      loadPrompts();
    })
    .catch((error) => console.error("oops", error));
}
