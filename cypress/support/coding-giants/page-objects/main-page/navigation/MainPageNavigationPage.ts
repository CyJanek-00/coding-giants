import {MainPageNavigationPageElement} from "./MainPageNavigationPageElement";

export class MainPageNavigationPage {

    public clickOnRegisterButton(): MainPageNavigationPage {
        MainPageNavigationPageElement.RegisterButton.getElement()
            .click().then(() => {
            this.assertCorrectRegisterPage();
        })
        return this;
    }

    private assertCorrectRegisterPage(): MainPageNavigationPage {
        cy.url().should('include', '/zapisz-sie')
        cy.get('#registration-page').should('be.visible')
        return this;
    }
}