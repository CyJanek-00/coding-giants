namespace Cypress {
    interface Chainable<Subject> {

        loginOnPage(): void;
    }
}

Cypress.Commands.add('loginOnPage', () => {
    cy.log('visit')
    cy.visit('', {
        onBeforeLoad: (win) => {
            win.sessionStorage.clear();
            win.localStorage.clear();
            win.localStorage.setItem('language', 'pl');
        }
    });
    cy.document().its('readyState').should('eq', 'complete');
});
