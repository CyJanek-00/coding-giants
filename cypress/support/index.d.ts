declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to log in on the panel.
         * @example cy.loginOnPage()
         */
        loginOnPage(): Chainable<void>;
    }
}