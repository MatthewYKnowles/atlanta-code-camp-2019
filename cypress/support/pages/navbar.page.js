import {PlayerSelectionPage} from "./playerSelection.page";

export class NavbarPage {
    goToConnectFour() {
        cy.get('.btn').click();
        return new PlayerSelectionPage();
    }
}
