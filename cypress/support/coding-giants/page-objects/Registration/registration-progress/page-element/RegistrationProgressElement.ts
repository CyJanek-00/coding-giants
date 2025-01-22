export class RegistrationProgressElement {

    public getElement(): any {
        return cy.get('.feature_registration-menu')
    }

    public getGivenAction(stepNumber: number): any {
        return cy.get('.feature_registration-menu__item-icon').contains(stepNumber)
            .parents('.feature_registration-menu__item')
            .first() // <-- returned main component
    }

    public verifyGivenStepTick(stepNumber: number): any {
        this.getGivenAction(stepNumber).contains('svg', 'tick')
            .should('be.visible');
    }

    public verifyGivenStepNumber(stepNumber: number): any {
        this.getGivenAction(stepNumber)
            .should('be.visible');
    }
}