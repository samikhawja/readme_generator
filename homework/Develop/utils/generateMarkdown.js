// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-lightgrey.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `<li><a href="#license">License</a></li>`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License 
  
  Distributed under the ${license} License.`
  }
}

// TODO: Create a function to generate markdown for README
// Template literal below
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  <details open="open">
    <summary>Table of Contents</summary>
    <ol>
      <li><a href="#about-the-project">About The Project</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      ${renderLicenseLink(data.license)}
      <li><a href="#questions">Questions</a></li>
    </ol>
  </details>


  ## About The Project

  ${data.description}


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ${renderLicenseSection(data.license)}


  ## Contributors

  ${data.contribution}
  
  
  ## Questions

  You can reach me with the following email address provided and also take a look at my GitHub account:

  Email: ${data.email}
  
  GitHub: [${data.github}](https://github.com/${data.github}/)
  `;
}

module.exports = generateMarkdown;
