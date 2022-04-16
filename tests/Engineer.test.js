const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{

    it('Should have name, id, and email attributes after instantiation.', () => {
        const finnley = new Engineer('Finnley', 10, 'Finnley@gmail.com', 'FinPow10');

        expect(finnley.name).toBe('Finnley');
        expect(finnley.id).toBe(10);
        expect(finnley.email).toBe('Finnley@gmail.com');
        expect(finnley.github).toBe('FinPow10');
    });

    it('should get the name, email, id, and role using methods', () => {
        const kristina = new Engineer('Kristina', 33, 'Frazier@gmail.com', 'Frazi200');

        expect(kristina.getName()).toBe('Kristina');
        expect(kristina.getId()).toBe(33);
        expect(kristina.getEmail()).toBe('Frazier@gmail.com');
        expect(kristina.getRole()).toBe('engineer');
        expect(kristina.getGithub()).toBe('Frazi200');
    });
});