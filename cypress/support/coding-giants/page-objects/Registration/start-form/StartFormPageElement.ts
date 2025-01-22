import {SubmitButton} from "./page-element/SubmitButton";
import {InputComponent} from "./page-element/InputComponent";
import {StatuteAgreedCheckbox} from "./page-element/StatuteAgreedCheckbox";
import {AdvertisementAgreedCheckbox} from "./page-element/AdvertisementAgreedCheckbox";

export class StartFormPageElement {

    public static SubmitButton: SubmitButton = new SubmitButton()
    public static InputComponent: InputComponent = new InputComponent()
    public static StatuteAgreedCheckbox: StatuteAgreedCheckbox = new StatuteAgreedCheckbox()
    public static AdvertisementAgreedCheckbox: AdvertisementAgreedCheckbox = new AdvertisementAgreedCheckbox()
}