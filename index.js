// Required imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// Prompts to generate readMe
const prompts = [
    {
    type: 'input',
    name: 'title',
    prompt: 'Enter a title for this project.',
},
{
    type: 'input',
    name: 'description',
    prompt: 'Enter a short description of this project.',
},
{
    type: 'input',
    name: 'installation',
    prompt: 'Enter installation instructions for this project.',
},
{
    type: 'input',
    name: 'usage',
    prompt: 'Enter usage instructions for this project.',
},
{
    type: 'input',
    name: 'contributing',
    prompt: 'Enter contribution guidelines for this project.',
},
{
    type: 'test',
    name: 'testing',
    prompt: 'Enter testing instructions for this project.',
},
{
    type: 'list',
    name: 'license',
    prompt: 'Select the license for this project.',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None']

},
{   type: 'input',
    name: 'gitHub',
    prompt: 'Enter your GitHub username.',
},
{
    type: 'input',
    name: 'email',
    prompt: 'Enter your email.',
}
];

// A function to write README file

function writeToFile(fileName, data){
    
    return fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('README file created.');
    }
});
    };

// A function to notify user app is initializing

function initialize() {
    console.log("Welcome to Nathan Johnston's ReadMe generator. Please complete all prompts promptly :) .")


// Inquirer code to run prompts
    inquirer.prompt(prompts).then((responses) => {
        writeToFile('README.md', generateMarkdown(responses));
    })  
    };

initialize();