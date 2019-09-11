describe('Atlanta Code Camp Website Tests', ()=> {
    it('should show Matthew Knowles presenting in room 109', ()=> {
        cy.visit('https://www.atlantacodecamp.com/2019');
        cy.get('.navbar-collapse > :nth-child(2) > :nth-child(6) > a').click();
        cy.contains('Matthew Knowles').click({force: true});
        cy.get('.panel-body > .dl-horizontal > :nth-child(6) > a').contains(109)
    });
});
