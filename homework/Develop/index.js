// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is a description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "Are there any licenses?",
        name: "licenses",
    },
    {
        type: "input",
        message: "Are contributing?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
