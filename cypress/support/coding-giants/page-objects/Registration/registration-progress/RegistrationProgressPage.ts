import {RegistrationProgressPageElement} from "./RegistrationProgresPageElement";

export class RegistrationProgressPage {

    public verifyGivenStepIsChecked(step: number): RegistrationProgressPage {
        RegistrationProgressPageElement.RegistrationProgressElement.verifyGivenStepTick(step)
        RegistrationProgressPageElement.RegistrationProgressElement.getGivenAction(step)
            .should('have.class', 'feature_registration-menu__item--completed')
        return this
    }

    public verifyGivenStepIsActive(step: number): RegistrationProgressPage {
        RegistrationProgressPageElement.RegistrationProgressElement.getGivenAction(step)
            .should('have.class', 'feature_registration-menu__item--active')
        return this
    }
}