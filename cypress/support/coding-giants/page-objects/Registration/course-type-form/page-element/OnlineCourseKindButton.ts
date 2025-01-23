import {CourseKind} from "../../enum/CourseKind";

export class OnlineCourseKindButton {
    public getElement(): any {
        return cy.contains('button', CourseKind.ONLINE)
            .scrollIntoView().should('be.visible')
    }
}