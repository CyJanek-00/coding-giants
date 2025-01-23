import './commands'

Cypress.on('uncaught:exception', (err) => {
    return !err.message.includes('License expired');
});
