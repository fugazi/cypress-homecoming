## 👋 Applitools Visual AI Challenge
This is a Visual AI Testing Challenge for Applitools company, developed by Douglas Urrea Ocampo using Cypress and Applitools Eyes as visual management and AI-powered visual UI.

## 🏠 Tester details
* Name: `Douglas Urrea Ocampo`
* Country: `Colombia`
* City: `Medellin`
* E-mail: `itmteleco@gmail.com`
* LinkedIn: [https://www.linkedin.com/in/douglasfugazi](https://www.linkedin.com/in/douglasfugazi)
* Contact: [https://douglasfugazi.co](https://douglasfugazi.co)

## ✨ Pre-requisites:
1. Install Node.js from [here](https://nodejs.org/en/)
2. Install npm from [here](https://www.npmjs.com)
3. Install git from [here](https://git-scm.com)
4. Install Cypress from [here](https://www.cypress.io)
5. Install Eyes Cypress SDK from [here](https://www.npmjs.com/package/@applitools/eyes-cypress)

## 🛠️ Running the project:
1. Download the project from GitHub
    * Option 1: `git clone https://github.com/fugazi/homecoming-cypress.git`
    * Option 2: Download it as a Zip file and extract it
2. CD into the `homecoming-cypress` folder
3. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
    * Login to Applitools > Click on the Person icon > My API Key
    * Option Linux/Mac: `export APPLITOOLS_API_KEY=<your_key>`
    * Option Windows: `set APPLITOOLS_API_KEY=<your_key>`
    * Option Manual: Open the file `applitools.config.js` and add the `apiKey:''`
4. run `npm install`
5. run `npx eyes-setup`
6. run `npm test`

### ✏️ Step by Step tutorial

Please see [Getting Started with Applitools Cypress Tutorial](https://applitools.com/tutorials/cypress.html#running-tests-with-applitools) for all the details.

### 🚴 Project configuration
* Cypress project Baseline: `ultraFastGridV1.spec.js` into folder `cypress\integration`
* Cypress project Checkpoint: `ultraFastGridV2.spec.js` into folder `cypress\integration`
* batchName: `Demo Homecoming Batch - Cypress`
* appName: `ultraFastTest App Baseline - Cypress`
* testName: `Smoke Test Baseline`