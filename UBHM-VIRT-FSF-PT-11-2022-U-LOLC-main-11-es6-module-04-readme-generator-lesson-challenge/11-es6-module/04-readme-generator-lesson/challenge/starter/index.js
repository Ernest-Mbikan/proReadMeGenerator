const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
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
choices: ['The MIT License', 'The GPL license', 'Apache License', 'IBM License', 'None'],
validation: (License)=>{ if(License){return true} else {return 'Please select a value to continue'}}
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
validation: (Username)=>{ if(Username){return true} else {return 'Please enter username to continue'}}
},{
  type: 'input',
message: 'what is your email address?',
name: 'Email',
validation: (Email)=>{ if(Email){return true} else {return 'Please enter email address to continue'}}
}];

// Function to write readme file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(function(data){
    writeToFile('README.md', generateMarkdown(data));
    console.log(data)
  })
}

// function init() {
//   inquirer.prompt(questions).then((inquirerResponses) => {
//     console.log('Generating README...');
//     writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
//   });
// }

// function call to initialize program
init();






//function to render license badge
function renderLicenseBadge(license){
  let badge = '';
  if(license  === 'MIT'){
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }else if(license  === 'Apache'){
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }else if(license  === 'GPL'){
    badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`
  }else if(license  === 'IBM'){
    badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
  }else{
    badge = ''
  }
  return badge;
 }


 //function for the license link

 function renderLicenseLink(license){
  licenselink = '';
  if(license  === 'MIT'){
    licenselink ='https://choosealicense.com/licenses/mit/'
  }else if(license  === 'Apache'){
    licenselink = 'https://www.apache.org/licenses/LICENSE-2.0'
  }else if(license  === 'GPL'){
    licenselink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  }else if(license  === 'IBM'){
    licenselink === 'https://www.ibm.com/support/pages/ibm-license-agreement-machine-code'
  }else {
    licenselink = ''
  }
  return licenselink;
 }

 //function to return  license section and empty string if none is selected
//  function displayLicenseSection(license){
//   licenseSection  = ''
//   if(license  === 'None'){
//     licenseSection  = ''
//   }else {
//     licenseSection = 
//     `License: $(license)`
//   }
//   return licenseSection;
//  }
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

