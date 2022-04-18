const ListPrompt = require("inquirer/lib/prompts/list");
const inquirer = require('inquirer');


const roleQuestion = [
    {
        type: 'list',
        name: 'newRole',
        message: 'What role is does your next employee have?',
        choices: ['manager', 'engineer', 'intern', 'FINISHED', ]
    }
];


function employeeRoleQ() {
    inquirer
    .prompt(roleQuestion)
    .then((role) => {
       if(role === 'Finished') {
       console.log('Team Built')
       // Put function createing HTML file here.
       } else {
        askEmployeeQuestions(role);
       }
    });
}


module.exports = employeeRoleQ;
