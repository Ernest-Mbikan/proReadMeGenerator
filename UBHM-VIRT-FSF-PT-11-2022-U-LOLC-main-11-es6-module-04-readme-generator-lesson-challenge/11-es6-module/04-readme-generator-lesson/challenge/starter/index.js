const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
type: 'input',
message: 'what is the title of your project?',
name: 'Title'
},{
  type: 'input',
message: 'what is your project about? Give a detailed description of your project.',
name: 'Description'
},{
  type: 'input',
message: 'Table of Contents',
name: 'Table of Contents'
},{
  type: 'input',
message: 'What does the user need to install?',
name: 'Installation'
},{
  type: 'input',
message: 'what is the app used for?',
name: 'Usage details'
},{
  type: 'list',
message: 'what licence did you use? ',
name: 'Licence',
choices: ['The MIT Licence', 'Te GPL licence', 'Apache Licence', 'GNU Licene', 'None'],
validation: (value)=>{ if(value){return true} else {return 'Please select a value to continue'}}
},{
  type: 'input',
message: 'Who contributed to this project?',
name: 'Contribution'
},{
  type: 'input',
message: 'what is required to test this app?',
name: 'Tests'
},{
  type: 'input',
message: 'Contact information for inquiries.',
name: 'Questions'
},{
  type: 'input',
message: 'github username:',
name: 'Username',
validation: (value)=>{ if(value){return true} else {return 'Please enter username to continue'}}
},{
  type: 'input',
message: 'what is your email address?',
name: 'Email',
validation: (value)=>{ if(value){return true} else {return 'Please enter email address to continue'}}
}];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data, function(err){
    console.log(fileName)
    console.log(data)
    if(err){
      return console.log(err)
    }else {
      console.log('sucess')
    }
  })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
      writeToFile('README.md', generateMarkdown(data));
      console.log(data)
    })
}

// function call to initialize program
init();
