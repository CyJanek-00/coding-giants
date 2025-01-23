import {CourseKind} from "../../enum/CourseKind";

export class ProgrammingButton {
    public getElement(): any {
        return cy.contains('span', CourseKind.PROGRAMMING.toUpperCase())
            .parents('button').first()
            .scrollIntoView().should('be.visible');
    }
}