let inquirer = require('inquirer');
const createEmployee = require('./lib/createEmployee');
let generateQs = require('./lib/generateQs');
let employeeRoleQ = require('./lib/employeeRoleQ');
let employeeList = [];

const roleQuestion = [
    {
        type: 'list',
        name: 'newRole',
        message: 'What role is does your next employee have?',
        choices: ['manager', 'engineer', 'intern', 'FINISHED', ]
    }
];

function askAndCreate() {
    inquirer
    .prompt(roleQuestion)
    .then((choice) =>{
        const { newRole } = choice;
        if (newRole === 'FINISHED') {
            console.log("Building team....")
            //Put code to create HTML HERE.
        } else {
            inquirer
            .prompt(generateQs(newRole))
            .then(answers => {
                employeeList.push(createEmployee(answers, newRole));
                console.log(employeeList);
                askAndCreate();
            })
        }
    })
}


init();


function init() {

    console.log('Welcome to TEAM BUILDER!');
    console.log('Answer the following questions about your team.\n')

    inquirer
    .prompt(generateQs('manager'))
    .then((answers) => {
        employeeList.push(createEmployee(answers, 'manager'));
        console.log(employeeList);
    })
    .then(() => {
        askAndCreate();
    })
}

