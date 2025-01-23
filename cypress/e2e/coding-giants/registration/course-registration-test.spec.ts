import {RegistrationPages} from "../../../support/coding-giants/page-objects/Registration/RegistrationPages";
import {RegistrationStartPageInputEnum} from "../../../support/coding-giants/page-objects/Registration/start-form/enum/registrationStartPageInputEnum";
import {ValidationEnum} from "../../../support/coding-giants/page-objects/common/enum/ValidationEnum";
import {SnackbarAssertionHelper} from "../../../support/coding-giants/page-objects/common/SnackbarAssertionHelper";
import {CourseKindEnum} from "../../../support/coding-giants/page-objects/Registration/enum/CourseKindEnum";
import {ProgrammingCourses} from "../../../support/coding-giants/page-objects/Registration/courses/enum/ProgrammingCourses";
import {StudentAndParentInputEnum} from "../../../support/coding-giants/page-objects/Registration/student-and-parent-data/enum/StudentAndParentInputEnum";

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
            .verifyValidationForField(RegistrationStartPageInputEnum.PARENT_NAME, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(RegistrationStartPageInputEnum.EMAIL, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(RegistrationStartPageInputEnum.PHONE_NUMBER, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyValidationForField(RegistrationStartPageInputEnum.BIRTH_YEAR, ValidationEnum.REQUIRED_FIELD_VALIDATION)
            .verifyStatusAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
            .verifyStatuteAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
        assertCorrectFirstPage()
    })

    it('case - 2 Verify correct error message appears when incorrect email format is provided', () => {
        RegistrationPages.StartFormPage
            .typeGivenInput(RegistrationStartPageInputEnum.EMAIL, 'user#example.com')
            .clickSubmitButton(false)
            .verifyValidationForField(RegistrationStartPageInputEnum.EMAIL, ValidationEnum.INCORRECT_EMAIL_VALIDATION)
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)
        assertCorrectFirstPage()
    })

    it('case - 3 Verify correct error message appears when incorrect phone number format is provided', () => {
        RegistrationPages.StartFormPage
            .typeGivenInput(RegistrationStartPageInputEnum.PHONE_NUMBER, '12345665')
            .clickSubmitButton(false)
        SnackbarAssertionHelper.assertSnackbarValue(ValidationEnum.PLEASE_FIELD_ALL_FIELD_VALIDATION)

        RegistrationPages.StartFormPage
            .verifyValidationForField(RegistrationStartPageInputEnum.PHONE_NUMBER, ValidationEnum.INCORRECT_PHONE_NUMBER_VALIDATION)
            .verifyStatuteAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
            .verifyStatusAgreedCheckboxValidation(ValidationEnum.THIS_FIELD_IS_REQUIRED)
        assertCorrectFirstPage()
    })

    it('case - 4 Verify correct first step form submission when correct data provided', () => {
        cy.log('fill in first step of registration')
        fillStartData()
        RegistrationPages.StartFormPage
            .clickStatuteAgreedCheckbox()
            .clickAdvertisementAgreedCheckbox()
            .clickSubmitButton(true)

        cy.log('verify correct progress page state')
        RegistrationPages.RegistrationProgressPage
            .verifyGivenStepIsChecked(1)
            .verifyGivenStepIsActive(2)
    })

    it('case - 5 Verify registration flow for online annual courses', () => {
        cy.log('fill in first step of registration')
        fillStartData()
        RegistrationPages.StartFormPage
            .clickStatuteAgreedCheckbox()
            .clickAdvertisementAgreedCheckbox()
            .clickSubmitButton(true)

        cy.log('verify correct progress page state')
        RegistrationPages.RegistrationProgressPage
            .verifyGivenStepIsChecked(1)
            .verifyGivenStepIsActive(2)

        cy.log('select course kind')
        RegistrationPages.CourseTypeFormPage
            .clickOnProgrammingButton()
            .clickOnOnlineKind()
            .selectCourseType(CourseKindEnum.ANNUAL_PROGRAMMING_COURSES)

        cy.log('select course details')
        RegistrationPages.CoursesPage
            .selectGivenOnlineCourse(ProgrammingCourses.FIRST_STEP_IN_PROGRAMMING_WITH_AI)
            .selectFirstFreeSlotDate()

        cy.log('verify correct progress page state')
        RegistrationPages.RegistrationProgressPage
            .verifyGivenStepIsChecked(1)
            .verifyGivenStepIsChecked(2)
            .verifyGivenStepIsChecked(3)
            .verifyGivenStepIsActive(4)

        cy.log('fill in student and parent data')
        RegistrationPages.StudentAndParentDataPage
            .typeGivenInput(StudentAndParentInputEnum.STUDENT_FIRSTNAME, 'Maciej')
            .typeGivenInput(StudentAndParentInputEnum.STUDENT_LASTNAME, 'Testowy')
            .typeGivenInput(StudentAndParentInputEnum.PARENT_LASTNAME, 'Testowy')
            .typeGivenInput(StudentAndParentInputEnum.ZIP_CODE, '26-900')
            .clickSubmitButton()

        cy.log('verify correct progress page state')
        RegistrationPages.RegistrationProgressPage
            .verifyGivenStepIsChecked(1)
            .verifyGivenStepIsChecked(2)
            .verifyGivenStepIsChecked(4)
            .verifyGivenStepIsActive(5)
    })

    function assertCorrectFirstPage() {
        cy.url().should('include', '/zapisz-sie')
        cy.get('#registration-page').should('be.visible')
    }

    function fillStartData() {
        RegistrationPages.StartFormPage
            .typeGivenInput(RegistrationStartPageInputEnum.PARENT_NAME, 'Artur')
            .typeGivenInput(RegistrationStartPageInputEnum.EMAIL, 'karolgiganci+fakedata80696@gmail.com')
            .typeGivenInput(RegistrationStartPageInputEnum.PHONE_NUMBER, '123456651')
            .typeGivenInput(RegistrationStartPageInputEnum.BIRTH_YEAR, '2005')
    }
})