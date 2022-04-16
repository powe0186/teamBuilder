let inquirer = require('inquirer');
const createEmployee = require('./lib/createEmployee');
let generateQs = require('./lib/generateQs');

let employeeList = [];
init();


function init() {
    console.log('Welcome to TEAM BUILDER!');
    console.log('Answer the following questions about your team.\n')
    
    askEmployeeQuestions('manager');
    // generate and ask questins about the manager.
    console.log(employeeList);
    
}

//Generates and prompts the questions for the specific role passed into it.
function askEmployeeQuestions(role) {
    inquirer
        .prompt(generateQs(role))
        .then((answers) => {
            let employee = createEmployee(answers, role);
            employeeList.push(employee);

        })
}
