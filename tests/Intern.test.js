const Intern = require('../lib/Intern');


describe('Intern', () =>{

    it('Should have name, id, and email attributes after instantiation.', () => {
        const finnley = new Intern('Finnley', 10, 'Finnley@gmail.com', 'UofM');

        expect(finnley.name).toBe('Finnley');
        expect(finnley.id).toBe(10);
        expect(finnley.email).toBe('Finnley@gmail.com');
        expect(finnley.school).toBe('UofM');
    });

    it('should get the name, email, id, and role using methods', () => {
        const kristina = new Intern('Kristina', 33, 'Frazier@gmail.com', 'UofM');

        expect(kristina.getName()).toBe('Kristina');
        expect(kristina.getId()).toBe(33);
        expect(kristina.getEmail()).toBe('Frazier@gmail.com');
        expect(kristina.getRole()).toBe('intern');
        expect(kristina.getSchool()).toBe('UofM');
    });
});