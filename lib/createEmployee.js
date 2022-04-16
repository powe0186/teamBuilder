const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee');


function createEmployee(data, role) {
    const {name, id, email, officeNumber, school, github} = data;
    switch (role) {
        case 'manager': 
            var newEmployee = new Manager(name, id, email, officeNumber);
            break;
        case 'engineer': 
            var newEmployee = new Engineer(name, id, email, github);
            break;
        case 'intern': 
            var newEmployee = new Intern(name, id, email, school);
            break;
    } 

    return newEmployee;
} 


module.exports = createEmployee;