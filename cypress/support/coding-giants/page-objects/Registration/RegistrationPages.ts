import {StartFormPage} from "./start-form/StartFormPage";
import {RegistrationProgressPage} from "./registration-progress/RegistrationProgressPage";
import {CourseTypeFormPage} from "./course-type-form/CourseTypeFormPage";
import { CoursesPage } from "./courses/CoursesPage";
import {StudentAndParentDataPage} from "./student-and-parent-data/StudentAndParentDataPage";

export class RegistrationPages {

    public static StartFormPage: StartFormPage = new StartFormPage();
    public static RegistrationProgressPage: RegistrationProgressPage = new RegistrationProgressPage();
    public static CourseTypeFormPage: CourseTypeFormPage = new CourseTypeFormPage();
    public static CoursesPage: CoursesPage = new CoursesPage()
    public static StudentAndParentDataPage: StudentAndParentDataPage = new StudentAndParentDataPage()
}