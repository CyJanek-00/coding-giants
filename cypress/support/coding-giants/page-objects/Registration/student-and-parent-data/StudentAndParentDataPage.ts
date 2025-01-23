import {StudentAndParentDataPageElement} from "./StudentAndParentDataPageElement";
import {StudentAndParentInputEnum} from "./enum/StudentAndParentInputEnum";

export class StudentAndParentDataPage {

    public typeGivenInput(selector: StudentAndParentInputEnum, value: string): StudentAndParentDataPage {
        StudentAndParentDataPageElement.StudentAndParentInputElement.getInputComponent(selector)
            .type(value)
        return this;
    }

    public clickSubmitButton(): StudentAndParentDataPage {
        StudentAndParentDataPageElement.SubmitButton.getElement()
            .click();
        return this
    }
}