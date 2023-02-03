// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.Title}
  https://github.com/${data.username}/${data.Title}

  ## Description

  $(data.Description)

  ## Table of Contents 

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
