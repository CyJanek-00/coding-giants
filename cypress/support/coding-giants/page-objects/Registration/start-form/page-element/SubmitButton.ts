export class SubmitButton {
    public getElement(): any {
        return cy.get('#agreement-step-submit')
            .scrollIntoView().should('be.visible')
    }
}