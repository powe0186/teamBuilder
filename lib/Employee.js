class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = parseInt(id, 10);
        this.email = email;
        this.role = 'employee';
    }

    getName() {return this.name};

    getId() {return this.id};

    getEmail() {return this.email};

    getRole() {return this.role};
}

module.exports = Employee;