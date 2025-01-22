import {RegistrationPages} from "../../../support/coding-giants/page-objects/Registration/RegistrationPages";
import {InputSelectorEnum} from "../../../support/coding-giants/page-objects/Registration/start-form/enum/inputSelectorEnum";
import {ValidationEnum} from "../../../support/coding-giants/page-objects/common/enum/ValidationEnum";
import {SnackbarAssertionHelper} from "../../../support/coding-giants/page-objects/common/SnackbarAssertionHelper";

describe('course registration Test', () => {

    beforeEach(() => {
        // cy.loginOnPage()
        cy.visit("https://devtest.giganciprogramowania.edu.pl/zapisz-sie");
    })

    it.skip('case - 1 assert validation communications', () => {
        RegistrationPages.StartFormPage
            .clickSubmitButton(false)

        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        RegistrationPages.StartFormPage
            .verifyValidationForField(InputSelectorEnum.ParentName, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(InputSelectorEnum.Email, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(InputSelectorEnum.PhoneNumber, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(InputSelectorEnum.BirthYear, ValidationEnum.REQUIRED_FIELD_VALIDATION)
        assertCorrectFirstPage()
    })

    it.skip('case - 2 assert email validation communications', () => {
        RegistrationPages.StartFormPage
            .typeGivenInput(InputSelectorEnum.Email, 'user#example.com')
            .clickSubmitButton(false)
            .verifyValidationForField(InputSelectorEnum.Email, ValidationEnum.INCORRECT_EMAIL_VALIDATION)
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        assertCorrectFirstPage()

        RegistrationPages.StartFormPage
            .dblclickSubmitButton()
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        assertCorrectFirstPage()
    })

    it('case - 3 assert phone number validation communications', () => {
        RegistrationPages.StartFormPage
            .typeGivenInput(InputSelectorEnum.PhoneNumber, '12345665')
            .clickSubmitButton(false)
            .verifyValidationForField(InputSelectorEnum.PhoneNumber, ValidationEnum.INCORRECT_PHONE_NUMBER_VALIDATION)
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        assertCorrectFirstPage()

        RegistrationPages.StartFormPage
            .dblclickSubmitButton()
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        assertCorrectFirstPage()
    })

    function assertCorrectFirstPage() {
        cy.url().should('include', '/zapisz-sie')
        cy.get('#registration-page').should('be.visible')
    }
})