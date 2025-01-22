export class StatuteAgreedCheckbox {

    public getElement(): any {
        return cy.get('#statuteAgreed')
            .parents('.form-check').first() // <-- returned main component
    }

    public getValidationElement(): any {
        return this.getElement().find('.formValidation')
    }

    public getStatuteAgreedCheckbox(): any {
        return this.getElement().find('.icon')
    }
}