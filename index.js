const inquirer = require('inquirer');
const fs = require('fs/promises');
const {Square, Triangle, Circle, Shapes}=require('./lib/shapes')
// const generateLogo = require('./lib/generateLogo');
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

const init = async () => {
    try {
        const response = await inquirer.prompt(questions);
        let shape;
        if (response.shape === 'circle') {
            shape = new Circle();
            // shape.setColor(response.color);
            // shape.setText(response.text)
            // shape.setTextColor(response.textColor);           
        } else if(response.shape === 'square') {
            shape = new Square();
            // shape.setColor(response.color);
            // shape.setText(response.text)
            // shape.setTextColor(response.textColor); 
        } else {
            shape = new Triangle();
            // shape.setColor(response.color);
            // shape.setText(response.text)
            // shape.setTextColor(response.textColor); 
        }
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
// function writeToFile(fileName, data) {  //fleName, data
//     return inquirer.prompt(questions)
//     .then((answers)=>{
//         const logo = generateLogo(answers)
      
//         fs.writeFile(fileName, data,'./examples/logo.svg', logo, function(err) {
//             if(err) {
//                 console.log('Logo not saved', err)
//             } else {
//                 console.log('Success!')
//             }
//         })
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }
// writeToFile();