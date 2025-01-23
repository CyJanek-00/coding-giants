import {RegistrationStartPageInputEnum} from "../enum/registrationStartPageInputEnum";

export class InputComponent {

    public getInputComponent(name: RegistrationStartPageInputEnum): Cypress.Chainable<any> {
        return cy.get(`[name="${name}"]`)
            .parents('.form-group').first() // <-- returned main component of given input
    }

    public getInputByName(name: RegistrationStartPageInputEnum): Cypress.Chainable<any> {
        return cy.get(`[name="${name}"]`)
            .scrollIntoView().should('be.visible')
    }

    public getInputValidationElement(name: RegistrationStartPageInputEnum): Cypress.Chainable<any> {
        return this.getInputComponent(name).find('.formValidation')
            .scrollIntoView().should('be.visible')
    }
}
