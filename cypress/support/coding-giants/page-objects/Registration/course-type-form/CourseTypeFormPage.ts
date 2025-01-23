import {CourseTypeFormPageElement} from "./CourseTypeFormPageElement";
import {ActionHelper} from "../../common/ActionHelper";

export class CourseTypeFormPage {

    public clickOnProgrammingButton(): CourseTypeFormPage {
        CourseTypeFormPageElement.ProgrammingCoursesButton.getElement()
            .click();
        return this;
    }

    public clickOnOnlineKind(): CourseTypeFormPage {
        CourseTypeFormPageElement.OnlineCourseKindButton.getElement()
        .click();
        return this;
    }

    public selectCourseType(type: string): CourseTypeFormPage {
        ActionHelper.clickOnButtonWithGivenText(type);
        return this;
    }
}