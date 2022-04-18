let inquirer = require('inquirer');
const createEmployee = require('./lib/createEmployee');
let generateQs = require('./lib/generateQs');
let employeeRoleQ = require('./lib/employeeRoleQ');
let createHTML = require('./lib/createHTML');
let fs = require('fs');
let employeeList = [];

const roleQuestion = [
    {
        type: 'list',
        name: 'newRole',
        message: 'What role is does your next employee have?',
        choices: ['manager', 'engineer', 'intern', 'FINISHED', ]
    }
];

init();


function askAndCreate() {
    inquirer
    .prompt(roleQuestion)
    .then((choice) =>{
        const { newRole } = choice;
        if (newRole === 'FINISHED') {
            console.log("Building team....")
            //Put code to create HTML HERE.
            writeHTMLFile();
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


function writeHTMLFile() {
    fs.writeFile('index.html', `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Build Team</title>
</head>
<body class="bg-info">
    <!-- Header Goes here -->
    <nav class="navbar navbar-light bg-success">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">My Build Team</span>
        </div>
    </nav>

    <!-- flexbox container -->
    <div class="d-flex flex-wrap p-2 bd-highlight justify-content-around">
    
    ${createHTML.employeeCards(employeeList)}
    `, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("HTML created!")
        }
    });
}

