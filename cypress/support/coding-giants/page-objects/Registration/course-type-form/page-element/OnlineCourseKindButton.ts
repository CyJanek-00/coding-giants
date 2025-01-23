import {CourseKindEnum} from "../../enum/CourseKindEnum";

export class OnlineCourseKindButton {
    public getElement(): any {
        return cy.contains('button', CourseKindEnum.ONLINE)
            .scrollIntoView().should('be.visible')
    }
}