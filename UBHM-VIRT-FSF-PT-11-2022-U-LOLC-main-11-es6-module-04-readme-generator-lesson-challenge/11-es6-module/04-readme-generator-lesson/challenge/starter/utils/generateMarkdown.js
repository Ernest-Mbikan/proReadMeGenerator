// function to generate markdown for README
function generateMarkdown(data) {
  return `
 
  https://github.com/${data.username}/${data.Title}

  ## Description

  $(data.Description)

  ## Table of Contents 
  ### *[License](#license)
  ### *[Installation](#installation)
  ### *[Usage](#usage)
  ### *[Contributors](#contributors)
  ### *[Tests](#tests)
  ### *[Questions](#questions)

  * [Installation](#installation)

  * [Usage](#usage)

  * [Licence](#licence)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## usage

  ## $(data.usage)


`;
}

module.exports = generateMarkdown;
