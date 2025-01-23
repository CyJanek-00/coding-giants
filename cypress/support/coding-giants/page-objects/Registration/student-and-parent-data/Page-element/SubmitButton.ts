export class SubmitButton {

    public getElement(): any {
        return cy.get('#registration-step-submit')
            .scrollIntoView().should('be.visible')
    }
}