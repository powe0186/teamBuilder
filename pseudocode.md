1. create file structure shown in the readme file

2. Build out classes for each of the following:
    - Employee
        - name
        - id
        - email
        getName()
        getID()
        getEmail()
        getRole() -- return 'employee'
    - manager
        - officeNumber
        - getRole -- return 'manager'
    - Engineer
        - github username
        - getgithub()
        - getRole() -- return 'engineer'
    - Intern    
        - school
        - getschool() -- return 
        - getRole -- return 'intern'

3. Import all of your classes and dependencies into the index.js file.
Make sure to import classes into their subclasses files.

4. Create an array to store employees.

5. function to initialize the app. Divide it up by employee roles.
    - All teams will need at least one manager,  -- create a nested function to generate a manager with inquirer prompts.
    Create a new manager object using the manager class and the data from the inquirer prompts.
    - push that object to the array of employees.

    - Do the same for intern and engineers and
        Maybe a different array of questions for each type?

    - create a function that stops the inquirer prompts and generates the html page.
        -use fs to write file to dist folder.
        - 

6. Create a function to generate HTML in the src folder
    - Generate employee cards for each type of employee and pass in the data from the prompts.
    - Create an array to store the html, and then push html for each employee into the array and return as a string at the end.
    - Make sure to export this function and import it in the index file.


TESTS
    - a suite of tests for each class in the app.
    - employee.test.js
    - manager.test.js ................ etc.

    
    