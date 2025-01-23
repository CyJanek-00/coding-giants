import {CoursePageElement} from "./CoursesPageElement";

export class CoursesPage {

    public selectGivenOnlineCourse(courseTitle: string): CoursesPage {
        CoursePageElement.GivenCourseComponent.getGivenCourseSelectButton(courseTitle)
            .click();
        return this;
    }


    public selectFirstFreeSlotDate(): CoursesPage {
        CoursePageElement.CourseDateComponent.firstFreeSlotSelectButton()
            .click();
        return this
    }

}