
const Employee = require('../lib/Employee');


describe('Employee', () =>{

    it('Should have name, id, and email attributes after instantiation.', () => {
        const finnley = new Employee('Finnley', 10, 'Finnley@gmail.com');

        expect(finnley.name).toBe('Finnley');
        expect(finnley.id).toBe(10);
        expect(finnley.email).toBe('Finnley@gmail.com');
    });

    it('should get the name, email, id, and role using methods', () => {
        const kristina = new Employee('Kristina', 33, 'Frazier@gmail.com');

        expect(kristina.getName()).toBe('Kristina');
        expect(kristina.getId()).toBe(33);
        expect(kristina.getEmail()).toBe('Frazier@gmail.com');
        expect(kristina.getRole()).toBe('employee');
    });
});