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

 
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.Title}
   ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}
  
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}
    
  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

  `;
}

module.exports = generateMarkdown;
