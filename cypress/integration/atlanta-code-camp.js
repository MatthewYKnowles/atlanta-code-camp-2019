describe("Atlanta Code Camp 2019", (()=> {
    beforeEach(()=> {
        cy.visit("https://atlantacodecamp.com/2019");
    });
    it("should make can't favorite a session when not logged in", (()=> {
        cy.contains('Sessions').click();
        cy.scrollTo('bottom');
        cy.contains('Matthew Knowles').click();
        cy.get('.speaker-image').should('have.attr', 'src').and('include', 'https://wilderminds.blob.core.windows.net/acc/img/2017/speakers/knowles.png')
    }));
    it("should make sure I am presenting in room 109", (()=> {
        cy.contains('Schedule').click();
        cy.contains('Matthew Knowles').click({force: true});
        cy.contains('Room').parent().contains(109)
    }));
}));
