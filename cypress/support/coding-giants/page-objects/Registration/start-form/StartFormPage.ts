import {StartFormPageElement} from "./StartFormPageElement";
import {InputSelectorEnum} from "./enum/inputSelectorEnum";

export class StartFormPage {

    public clickSubmitButton(success: boolean): StartFormPage {
        cy.intercept('POST', 'https://devtest.crm.giganciprogramowania.edu.pl/api/Lead/CreateRegistrationFormLead').as('createRegistrationFormLeadRequest');
        StartFormPageElement.SubmitButton.getElement()
            .click()
        if (success) {
            cy.wait('@createRegistrationFormLeadRequest')
        } else {
            cy.get('@createRegistrationFormLeadRequest').should('not.exist');
        }
        return this;
    }

    public dblclickSubmitButton(): StartFormPage {
        StartFormPageElement.SubmitButton.getElement()
            .dblclick();
        return this
    }

    public verifyValidationForField(selector: InputSelectorEnum, expectedMessage: string): StartFormPage {
        StartFormPageElement.InputComponent.getInputValidationElement(selector).invoke("prop", "textContent").then((textContent) => {
            expect(textContent).to.equal(expectedMessage);
        })
        return this;
    }

    public typeGivenInput(selector: InputSelectorEnum, value: string): StartFormPage {
        StartFormPageElement.InputComponent.getInputComponent(selector)
            .type(value)
        return this;
    }
}