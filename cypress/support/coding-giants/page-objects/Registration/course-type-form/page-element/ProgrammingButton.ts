import {CourseKindEnum} from "../../enum/CourseKindEnum";

export class ProgrammingButton {
    public getElement(): any {
        return cy.contains('span', CourseKindEnum.PROGRAMMING.toUpperCase())
            .parents('button').first()
            .scrollIntoView().should('be.visible');
    }
}