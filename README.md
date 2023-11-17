# Jest Demo

## Purpose
Jest is a JavaScript testing framework. For our Tech Elevator students, we used Cypress for testing front-end sites, but you may recall Cypress was very slow. Jest is a lot faster (tests will run in parallel) and may be more appropriate if you want to unit test.

## Pre-requisites
* [Visual Studio Code](https://code.visualstudio.com/)
* [Node/NPM](https://nodejs.org/en/download)
* [Windows Terminal](https://apps.microsoft.com/detail/9N0DX20HK701?hl=en-us&gl=US)
* [Git Bash](https://git-scm.com/downloads)
  * During installation, select the option to add a Git Bash profile to your Windows Terminal

## Installing Jest
* Open a terminal window in the folder containing your JavaScript files. 
* Add Jest to your project by running `npm install --save-dev jest`
    * Note: This will install Jest for this project; only needs to be done once
* Add Jest to your package.json
    * This will enable you to run Jest using npm
    * In the **scripts** section of your package.json file, add the following line:

        `"test": "jest"`
    * If your package.json does not have a **scripts** section, you can create one (see the package.json in this project as a sample if you don't know npm well)

## Running Jest
* After completing the Installing Jest steps, you can run Jest by running:

    `npm test`
* Jest will scan your project and subfolders in search of tests. 
* You may want to install the [Jest Plugin](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) for Visual Studio Code. It will allow you to view test results in realtime when you open your script file.

## Storing and Naming Tests
There are two common ways to organize tests:
* It's a good practice to create a `__tests__` folder to centralize your tests (yes, the underscores are necessary).
* Tests may also follow a naming convention where tests end with either `.test.js` or `.spec.js`.
    * So, it's standard to put tests for a file named `script.js` in a file called `script.test.js` or `script.spec.js`
    * Visual Studio Code will change the icon for the file from yellow to red to indicate it is a test.
