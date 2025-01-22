export class SnackbarAssertionHelper {

    public static assertSnackbarValue(expectedText: string): void {
        const snackbar = cy.get('#system-message-container').find('.alert-error')
            snackbar.should('have.length', 1)
            snackbar.should('be.visible').and('include.text', expectedText);
    }

    public static assertSnackbarValueIsNotVisible(): void {
        cy.get('.alert-error').should('not.exist')
    }
}