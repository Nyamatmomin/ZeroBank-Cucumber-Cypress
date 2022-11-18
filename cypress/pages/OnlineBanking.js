class OnlineBanking {

    elements = {

        bankingMenu: () => cy.get("#onlineBankingMenu"),
        services: () => cy.get(".margin7top > .span4")

    }

    getAllServices (){

        return this.elements.services()
    }

}


module.exports = new OnlineBanking();