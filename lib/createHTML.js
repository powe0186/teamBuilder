function roleIcon(role) {
    switch (role) {
        case 'manager':
            return `<i class="fa-solid fa-mug-saucer"></i> Manager`;
            break;
        case 'engineer':
            return `<i class="fa-solid fa-compass-drafting"></i> Engineer`;
            break;
        case 'intern':
            return `<i class="fa-solid fa-chess-pawn"></i> Intern`
    }
}

function addThirdAtrribute(role, officeNumber, github, school) {
    switch (role) {
        case 'manager':
            return `<li class="list-group-item"><i class="fa-solid fa-building"></i> Office: ${officeNumber}</li>`;
            break;
        case 'engineer':
            return `<li class="list-group-item"><a href="https://github.com/${github}"><i class="fa-brands fa-github"></i> ${github}</a></li>`;
            break;
        case 'intern':
            return `<li class="list-group-item"><i class="fa-solid fa-school"></i> ${school}</li>`
    }
}



function createEmployeeCard(emplObj) {
    const {name, id, email, role, officeNumber, github, school} = emplObj;

    let employeeCard = `
    <div class="card my-4" style="width: 18rem;">
            <div class="card-header bg-primary">
              <h2>${name}</h2>
              <h3>${roleIcon(role)}</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fa-solid fa-id-badge"></i> Id#: ${id}</li>
              <li class="list-group-item"><i class="fa-solid fa-square-envelope"></i> Email: <a href="mailto: ${email}">${email}</a></li>
              ${addThirdAtrribute(role, officeNumber, github, school)}
            </ul>
          </div>
    `

    return employeeCard;
}

function employeeCards(employeeList) {
    let allCards = ''
    for(employee of employeeList) {
        allCards += `
        
        ${createEmployeeCard(employee)}
        
        `

    }

    return allCards;
}

module.exports = {
    roleIcon,
    addThirdAtrribute,
    createEmployeeCard,
    employeeCards
}

