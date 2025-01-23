import {RegistrationProgressPageElement} from "./RegistrationProgresPageElement";

export class RegistrationProgressPage {

    public verifyGivenStepIsChecked(step: number): RegistrationProgressPage {
        const element = RegistrationProgressPageElement.RegistrationProgressElement
        element.getGivenAction(step).should('have.class', 'feature_registration-menu__item--completed')
        element.getGivenAction(step).find('.icon-tick').should('be.visible');
        return this
    }

    public verifyGivenStepIsActive(step: number): RegistrationProgressPage {
        const element = RegistrationProgressPageElement.RegistrationProgressElement
        element.getGivenAction(step).should('have.class', 'feature_registration-menu__item--active');
        element.getGivenAction(step).find('.icon-tick').should('not.be.visible');
        return this;
    }
}