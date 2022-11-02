# Hospital-API
  - Coding Ninjas Skill Test Assignment
 
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

## About The Project
Design the server side for a Hospital-API.
Tech Stack: Node.js &amp; Mongo DB


## Tasks :
* ### Theme :
  - We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients
  - There can be 2 types of Users
    - Doctors
    - Patients
  - Doctors can log in
  - Each time a patient visits, the doctor will follow 2 steps
    - Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
    - After the checkup, create a Report
  - Patient Report will have the following fields
    - Created by doctor
    - Status (You can use enums if you want to):
      - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,Positive-Admit]
    - Date
* ### Required Routes :
  - /doctors/register → with username and password
  - /doctors/login → returns the JWT to be used
  - /patients/register
  - /patients/:id/create_report
  - /patients/:id/all_reports → List all the reports of a patient oldest to latest
  - /reports/:status → List all the reports of all the patients filtered by a specific status

### Built With
Here is the Technology Stack of this Application. which I have used to Built this Application.
* MongoDB
* Express
* NodeJS

<!-- GETTING STARTED -->
## Getting Started
   * Clone this project
   * Start by installing npm and mongoDB if you don't have them already.
   * Run the Mongo Server.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
  
## Directory Structure and flow of The Code

    Hospital-API
        |------ config
        |         └--- mongoose.js
        |------ controller
        |         └--- doctorController.js
        |         └--- patientController.js
        |         └--- reportController.js
        |------ middleware
        |         └--- authMiddleware.js
        |------ models
        |         └--- doctor.js
        |         └--- patient.js
        |         └--- report.js
        |------ routes
        |         └--- doctor.js
        |         └--- patient.js
        |         └--- report.js
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md

<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request










