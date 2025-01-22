export class AdvertisementAgreedCheckbox {

    public getElement(): any {
        return cy.get('#advertisementAgreed')
            .parents('.form-check').first() // <-- returned main component
    }

    public getValidationElement(): any {
        return this.getElement().find('.formValidation')
    }

    public getStatuteAgreedCheckbox(): any {
        return this.getElement().find('.icon')
    }
}