describe('Atlanta Code Camp Website Tests', ()=> {
    it('should show Matthew Knowles presenting in room 109', ()=> {
        cy.visit('localhost:4200');
        cy.contains('Connect Four').click();
        let nameOne = 'Player One-' + Date.now();
        cy.get('#playerOne').type(nameOne);
        let nameTwo = 'Player Two-' + Date.now();
        cy.get('#playerTwo').type(nameTwo);
        cy.get('.col-lg-4 > button').click();
        cy.get('canvas').then((canvas) => {
            console.log(canvas);
            const columnWidth = canvas.width() / 7;
            cy.get("canvas").click(columnWidth * 1 / 2, 10);
            cy.get("canvas").click(columnWidth * 5 / 2, 10)
        });
    })
});
