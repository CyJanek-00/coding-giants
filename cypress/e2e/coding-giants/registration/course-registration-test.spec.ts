import {RegistrationPages} from "../../../support/coding-giants/page-objects/Registration/RegistrationPages";
import {InputSelectorEnum} from "../../../support/coding-giants/page-objects/Registration/start-form/enum/inputSelectorEnum";
import {ValidationEnum} from "../../../support/coding-giants/page-objects/common/enum/ValidationEnum";
import {SnackbarAssertionHelper} from "../../../support/coding-giants/page-objects/common/SnackbarAssertionHelper";

describe('course registration Test', () => {

    beforeEach(() => {
        cy.clearAllLocalStorage()
        cy.visit("https://devtest.giganciprogramowania.edu.pl/zapisz-sie");
    })

    it('case - 1 Verify required fields for first step of polish registration form module', () => {
        RegistrationPages.RegistrationProgressPage
            .verifyGivenStepIsActive(1)
        RegistrationPages.StartFormPage
            .clickSubmitButton(false)

        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        RegistrationPages.StartFormPage
            .verifyValidationForField(InputSelectorEnum.ParentName, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(InputSelectorEnum.Email, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(InputSelectorEnum.PhoneNumber, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(InputSelectorEnum.BirthYear, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyStatusAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
            .verifyStatuteAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
        assertCorrectFirstPage()
    })

    it.skip('case - 2 Verify correct error message appears when incorrect email format is provided', () => {
        RegistrationPages.StartFormPage
            .typeGivenInput(InputSelectorEnum.Email, 'user#example.com')
            .clickSubmitButton(false)
            .verifyValidationForField(InputSelectorEnum.Email, ValidationEnum.INCORRECT_EMAIL_VALIDATION)
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        assertCorrectFirstPage()

        // RegistrationPages.StartFormPage
        //     .dblclickSubmitButton()
        // SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        // assertCorrectFirstPage()
    })

    it.skip('case - 3 Verify correct error message appears when incorrect phone number format is provided', () => {
        RegistrationPages.StartFormPage
            .typeGivenInput(InputSelectorEnum.PhoneNumber, '12345665')
            .clickSubmitButton(false)
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)

        RegistrationPages.StartFormPage
            .verifyValidationForField(InputSelectorEnum.PhoneNumber, ValidationEnum.INCORRECT_PHONE_NUMBER_VALIDATION)
            .verifyStatuteAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
            .verifyStatusAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
        assertCorrectFirstPage()

        // RegistrationPages.StartFormPage
        //     .dblclickSubmitButton()
        // SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        // assertCorrectFirstPage()
    })

    it.skip('case - 4 Verify correct first step form submission when correct data provided', () => {
        RegistrationPages.StartFormPage
            .typeGivenInput(InputSelectorEnum.ParentName, 'Artur')
            .typeGivenInput(InputSelectorEnum.Email, 'karolgiganci+fakedata80696@gmail.com')
            .typeGivenInput(InputSelectorEnum.PhoneNumber, '123456651')
            .typeGivenInput(InputSelectorEnum.BirthYear, '2005')
            .clickStatuteAgreedCheckbox()
            .clickAdvertisementAgreedCheckbox()
            .clickSubmitButton(true)
        // RegistrationPages.StartFormPage
        //     .dblclickSubmitButton()
        // SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        // assertCorrectFirstPage()
    })

    function assertCorrectFirstPage() {
        cy.url().should('include', '/zapisz-sie')
        cy.get('#registration-page').should('be.visible')
    }
})