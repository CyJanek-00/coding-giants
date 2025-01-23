import {StudentAndParentInputEnum} from "../enum/StudentAndParentInputEnum";

export class StudentAndParentInputElement {

    public getInputComponent(name: StudentAndParentInputEnum): Cypress.Chainable<any> {
        return cy.get(`[name="${name}"]`)
            .parents('.form-group').first() // <-- returned main component of given input
    }

    public getInputByName(name: StudentAndParentInputEnum): Cypress.Chainable<any> {
        return cy.get(`[name="${name}"]`)
            .scrollIntoView().should('be.visible')
    }

    public getInputValidationElement(name: StudentAndParentInputEnum): Cypress.Chainable<any> {
        return this.getInputComponent(name).find('.formValidation')
            .scrollIntoView().should('be.visible')
    }
}