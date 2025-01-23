import {ProgrammingCourses} from "../enum/ProgrammingCourses";

export class GivenCourseComponent {

    public getComponent(courseTitle: string): any {
        return cy.get(`[data-name="${courseTitle}"]`)
            .scrollIntoView().should('be.visible') // <-- returned main component
    }

    public getGivenCourseSelectButton(courseTitle: string): any {
        return this.getComponent(courseTitle)
            .find('#registration-step-select-course-registered')
    }
}