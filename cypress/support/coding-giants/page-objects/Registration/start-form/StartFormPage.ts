import {StartFormPageElement} from "./StartFormPageElement";
import {InputSelectorEnum} from "./enum/inputSelectorEnum";
import {StatuteAgreedCheckbox} from "./page-element/StatuteAgreedCheckbox";

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

    public clickStatuteAgreedCheckbox(): StartFormPage {
        StartFormPageElement.StatuteAgreedCheckbox.getStatuteAgreedCheckbox()
            .click();
        return this;
    }

    public verifyStatusAgreedCheckboxValidation(expectedMessage: string): StartFormPage {
        StartFormPageElement.StatuteAgreedCheckbox.getValidationElement().invoke("prop", "textContent").then((textContent) => {
            expect(textContent).to.equal(expectedMessage);
        })
        return this;
    }

    public clickAdvertisementAgreedCheckbox(): StartFormPage {
        StartFormPageElement.AdvertisementAgreedCheckbox.getStatuteAgreedCheckbox()
            .click();
        return this;
    }

    public verifyStatuteAgreedCheckboxValidation(expectedMessage: string): StartFormPage {
        StartFormPageElement.AdvertisementAgreedCheckbox.getValidationElement().invoke("prop", "textContent").then((textContent) => {
            expect(textContent).to.equal(expectedMessage);
        })
        return this;
    }
}