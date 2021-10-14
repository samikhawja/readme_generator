// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Template literal below
function generateMarkdown(data) {
  return `# ${data.title}

  <details open="open">
    <summary>Table of Contents</summary>
    <ol>
      <li><a href="#about-the-project">About The Project</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#questions">Questions</a></li>
    </ol>
  </details>


  ## About The Project

  ${data.description}


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Questions

  You can reach me with the following email address provided and also take a look at my GitHub account:

  Email: ${data.email}
  
  GitHub: [${data.github}](https://github.com/${data.github}/)
  `;
}

module.exports = generateMarkdown;
