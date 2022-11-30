class AccountSummery {

    elements = {

        getAccount : () => cy.get(".board-header"),
        getAccountTable: () => cy.get(".offset2 > .board")
    }
}

module.exports = new AccountSummery()