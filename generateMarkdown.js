const licenseBadgeLink = (license) => {
        switch(license) {
            case 'MIT':
                return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            case 'Apache 2.0':
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            case 'GNU GPLv3':
                return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            case 'ISC':
                return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            default:
                return '';
        }
    };

const renderLicense = (license) => {
    if (license !== 'None')  {
        return `## License\n\nThis project is covered under the ${license} license.`;
    } else {
        return '';
    }
}

const renderLicenseTableOfContents = (license) => {
    if (license !== 'None')  {
        return `- [License](#license)`;
    } else {
        return '';
    }
};

//Generate the README markdown file
function generateMarkdown(data) {
    return `
## Title
${data.title}

${licenseBadgeLink(data.license)}
    
## Description
${data.description}
    
## Table of Content
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseTableOfContents(data.license)}
- [Contributing](#contributing)
- [Testing](#testing)
    
## Installation
${data.installation}
    
## Usage
${data.usage}

${renderLicense(data.license)}
    
## Contributing
${data.contributing}
    
## Testing
${data.testing}
    
# Contact
* GitHub: [${data.gitHub}](https://github.com/${data.gitHub})
* Email: [${data.email}](mailto:${data.email})`
};

module.exports = generateMarkdown;
