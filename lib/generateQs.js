

function generateQs(role) {
    //set up standard 3 questions common to all roles.
    let questions = [
        {
            type: 'input',
            name: 'name',
            message: `What is the name of your ${role}?`
        },
        { 
            type: 'input',
            name: 'id',
            message: `What is the employee ID of your ${role}?`
        },
        { 
            type: 'input',
            name: 'email',
            message: `What is your ${role}'s email address?`
        }
    ]

    // set up 4th question unique to each rollup

    switch (role) {
        case 'manager':
            questions.push(
                { 
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is your manager's office number?"
                });
                break;
            case 'engineer':
                questions.push(
                    { 
                        type: 'input',
                        name: 'github',
                        message: "What is your engineer's Github name?"
                    });
                break;
            case 'intern':
                questions.push(
                    { 
                        type: 'input',
                        name: 'school',
                        message: "What school does your intern attend?"
                    });
                break;
            default:
                break;
    };
    console.log("gernerateQs works.");
    return questions;
}


module.exports = generateQs;