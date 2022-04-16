const Manager = require('../lib/Manager');


describe('Manager', () =>{

    it('Should have name, id, and email attributes after instantiation.', () => {
        const finnley = new Manager('Finnley', 10, 'Finnley@gmail.com', 305);

        expect(finnley.name).toBe('Finnley');
        expect(finnley.id).toBe(10);
        expect(finnley.email).toBe('Finnley@gmail.com');
        expect(finnley.officeNumber).toBe(305);
    });

    it('should get the name, email, id, and role using methods', () => {
        const kristina = new Manager('Kristina', 33, 'Frazier@gmail.com', 112);

        expect(kristina.getName()).toBe('Kristina');
        expect(kristina.getId()).toBe(33);
        expect(kristina.getEmail()).toBe('Frazier@gmail.com');
        expect(kristina.getRole()).toBe('manager');
        expect(kristina.getOfficeNumber()).toBe(112);
    });
});