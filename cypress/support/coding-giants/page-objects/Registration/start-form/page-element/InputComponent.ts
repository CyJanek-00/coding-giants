import {InputSelectorEnum} from "../enum/inputSelectorEnum";

export class InputComponent {

    public getInputComponent(name: InputSelectorEnum): Cypress.Chainable<any> {
        return cy.get(`[name="${name}"]`)
            .parents('.form-group').first() // <-- returned main component of given input
    }

    public getInputByName(name: InputSelectorEnum): Cypress.Chainable<any> {
        return cy.get(`[name="${name}"]`)
            .scrollIntoView().should('be.visible')
    }

    public getInputValidationElement(name: InputSelectorEnum): Cypress.Chainable<any> {
        return this.getInputComponent(name).find('.formValidation')
            .scrollIntoView().should('be.visible')
    }
}
