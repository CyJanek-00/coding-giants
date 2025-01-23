export class ActionHelper {

    public static clickOnButtonWithGivenText(text: string): void {
        const button = cy.contains('button', text)
        button.scrollIntoView().should('be.visible')
        button.click();
    }
}