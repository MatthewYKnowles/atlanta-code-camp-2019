import {NavbarPage} from "../support/pages/navbar.page";

describe("Connect Four", ()=> {
    let playerOneName;
    let playerTwoName;
    let navbarPage;

    beforeEach(()=> {
        navbarPage = new NavbarPage();
        let now = Date.now();
        playerOneName = `p1-${now}`;
        playerTwoName = `p2-${now}`;
        cy.visit("localhost:4200");
    });

    it('should display winning players name', ()=> {
        let playerSelectionPage = navbarPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.getVictoryMessage().contains(`${playerOneName} wins!!`)
    });

    it('should display column full', ()=> {
        let playerSelectionPage = navbarPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.getColumnWarning().should('not.be.visible');
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.getColumnWarning().should('be.visible');
    });

    it('should keep the same color for board and pieces', ()=> {
        cy.viewport('macbook-15');
        let playerSelectionPage = navbarPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.getGameBoard().matchImageSnapshot();
    });

    it('should keep a record of victories', ()=> {
        let playerSelectionPage = navbarPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(6);
        connectFourPage.getRecord().contains(`${playerOneName} vs ${playerTwoName}: 1-0-0`);
        connectFourPage.startNewGame();
        connectFourPage.dropPieceInColumn(1);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(6);
        connectFourPage.getRecord().contains(`${playerOneName} vs ${playerTwoName}: 1-1-0`);
    });
});
