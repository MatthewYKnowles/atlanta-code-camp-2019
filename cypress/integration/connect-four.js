describe('Connect Four', ()=> {
    it('should display column full when trying to add a piece to a full column', ()=> {
        cy.visit('localhost:4200');
        cy.get('.btn > :nth-child(2)').click();
        let nameOne = 'P1-' + Date.now();
        cy.get(':nth-child(1) > .form-control').type(nameOne);
        let nameTwo = 'P2-' + Date.now();
        cy.get(':nth-child(2) > .form-control').type(nameTwo);
        cy.get('form.ng-dirty > .btn').click();
        cy.get('canvas').then((canvas) => {
            console.log(canvas);
            const columnWidth = canvas.width() / 7;
            cy.get("canvas").click(columnWidth * 1 / 2, 10);
            cy.get("canvas").click(columnWidth * 5 / 2, 10);
            cy.get("canvas").click(columnWidth * 5 / 2, 10);
            cy.get("canvas").click(columnWidth * 5 / 2, 10);
            cy.get("canvas").click(columnWidth * 5 / 2, 10);
            cy.get("canvas").click(columnWidth * 5 / 2, 10);
            cy.get("canvas").click(columnWidth * 5 / 2, 10);
            cy.contains("Column is full").should('not.be.visible');
            cy.get("canvas").click(columnWidth * 5 / 2, 10);
            cy.contains("Column is full").should('be.visible')
        });
    })
});
