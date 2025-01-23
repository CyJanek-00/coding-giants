export class CourseDateComponent {

    public getElement(): any {
        return cy.get('[data-day]');
    }

    public firstFreeSlotElement(): any {
        return this.getElement()
            .find('.timetable__date-places-info')
            .filter((element) => {
                const text = Cypress.$(element).text();
                return /Wolnych miejsc: \d+/.test(text) && !text.includes('Zapisy na listę rezerwową');
            })
            .eq(0).parents('[data-day]').first()
            .scrollIntoView().should('be.visible');
    }

    public firstFreeSlotSelectButton(): any {
        return this.firstFreeSlotElement()
            .find('#registration-step-timetable-select')
    }
}
