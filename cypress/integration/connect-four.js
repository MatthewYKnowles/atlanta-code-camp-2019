describe('Connect Four', ()=> {
    it('should display column full when trying to add a piece to a full column', ()=> {
        cy.visit('http://matthewyknowles.com');
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
    });
    it('should match snapshot', ()=> {
        cy.viewport('macbook-15');
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
            cy.get("canvas").matchImageSnapshot();
        });
    });
    it('should verify match history', ()=> {
        cy.visit('localhost:4200');
        cy.get('.btn > :nth-child(2)').click();
        let now = Date.now();
        let nameOne = `p1-${now}`;
        cy.get(':nth-child(1) > .form-control').type(nameOne);
        let nameTwo = `p2-${now}`;
        cy.get(':nth-child(2) > .form-control').type(nameTwo);
        cy.get('form.ng-dirty > .btn').click();
        cy.get('canvas').then((canvas) => {
            const columnWidth = canvas.width() / 7;
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
            cy.get("canvas").click(columnWidth * 3 / 2, 10);
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
            cy.get("canvas").click(columnWidth * 3 / 2, 10);
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
            cy.get("canvas").click(columnWidth * 3 / 2, 10);
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
        });
        cy.contains(`${nameOne} vs ${nameTwo}: 1-0-0`);
        cy.get('.container > .btn').click();
        cy.get('canvas').then((canvas) => {
            const columnWidth = canvas.width() / 7;
            cy.get("canvas").click(columnWidth * 6 / 2, 10);
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
            cy.get("canvas").click(columnWidth * 3 / 2, 10);
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
            cy.get("canvas").click(columnWidth * 3 / 2, 10);
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
            cy.get("canvas").click(columnWidth * 3 / 2, 10);
            cy.get("canvas").click(columnWidth * 2 / 2, 10);
        });
        cy.contains(`${nameOne} vs ${nameTwo}: 1-1-0`);
    })
});
