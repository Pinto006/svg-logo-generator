const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Triangle, Circle}=require('./lib/shapes')
const generateLogo = require('./lib/generateLogo');
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
        name: 'backgroundColor',
        message: 'What color would you like the background to be?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },

]

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setText(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeElement = shape.render()

    }
    
}

function writeToFile(fileName, data) {  //fleName, data
    return inquirer.prompt(questions)
    .then((answers)=>{
        const logo = generateLogo(answers)
      
        fs.writeFile(fileName, data,'./examples/logo.svg', logo, function(err) {
            if(err) {
                console.log('Logo not saved', err)
            } else {
                console.log('Success!')
            }
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}
writeToFile();