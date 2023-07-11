import blazedemo from '../fixtures/blazedemo.json'

class PurchasConfirmation{

    confirmed(){
        cy.wait(600)
        this.ConfirmationText.should('have.text',blazedemo.confirmationText)


    }

    get ConfirmationText(){

        return cy.get('h1');
    }
}

export default new PurchasConfirmation();