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




















 
//   ## Description

//   $(data.Description)


//   ## Table of Contents 
//   ## *[License](#license)
//   ## *[Installation](#installation)
//   ## *[Usage](#usage)
//   ## *[Contributors](#contributors)
//   ## *[Tests](#tests)
//   ## *[Questions](#questions)

//   * [Installation](#installation)

//   * [Usage](#usage)

//   * [Licence](#licence)

//   * [Contributing](#contributing)

//   * [Tests](#tests)

//   * [Questions](#questions)

//   ## Installation

//   To install necessary dependencies, run the following command:

//   \`\`\`
//   ${data.installation}
//   \`\`\`

//   ## usage

//   ## $(data.usage)

//   ## Contributors:
//   ## $(data.contribution)

//   ## Tests:
//   ## To test this app, run the following commands:
//   ## $(data.Tests)

//   ## Questions:
//   ## If you have any questions, you may wish to contact me as follows:
//   ## Github: https://github.com/Ernest-Mbikan
//   ## Or
//   ## Email: ernestmbiks@hotmail.com



// `;
// }

// module.exports = generateMarkdown;
