/// <reference types="cypress" />

describe("The Homecoming Applitools Visual AI Challenge", () => {

    it(`ultraFastTest - App Baseline`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('https://demo.applitools.com');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'ultraFastTest App Baseline - Cypress',
            testName: 'Smoke Test Baseline - Cypress',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Task 1 - Login Window",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click()

        // Check the app page
        cy.eyesCheckWindow({
            tag: "Task 2 - App Window",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});
