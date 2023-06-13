const inquirer = require('inquirer');
const fs = require('fs/promises');
const {Square, Triangle, Circle,}=require('./lib/shapes')
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Pick the shape you want your logo to be',
        choices: ['circle', 'triangle', 'square'],
        filter(value) {
            return value.toLowerCase();
        }
    }, 
    {
        type: 'input',
        name: 'text',
        message: 'Add three letter you would like included in your logo',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the background to be?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },

]
//to generate the logo
const init = async () => {
    try {
        const response = await inquirer.prompt(questions);
        let shape;
        if (response.shape === 'circle') {
            shape = new Circle();      
        } else if(response.shape === 'square') {
            shape = new Square();
        } else {
            shape = new Triangle();
        }
        //to set the shape color, text and text color 
        shape.setColor(response.color);
        shape.setText(response.text)
        shape.setTextColor(response.textColor);
        console.log('shape', shape);
        console.log(response);
        fs.writeFile('logo.svg', shape.render());
    } catch (err) {
        console.error(err);
    }
};

init();
