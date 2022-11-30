import {
    Given,
    When,
    Then,
    DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
const Summerypage =  require("../../pages/AccountSummery") 


When("User clicks on Accounts Summery link", () => {
    cy.get("#account_summary_tab").click()

})

Then("User should see", (DataTable) => {

    DataTable.hashes().forEach((accountType, index) => {

        Summerypage.elements.getAccount().eq(index).should('contain.text', accountType.Accounts)
    });
})
Then("User should see Correct Balance for each Account", () => {
    const excelFilePath = "D:/Cypress Projects/ZaroBank_Cypress_Test_Automation/cypress/fixtures/Accounts Summery.xlsx";
    cy.task("getSheetNames", { excelFilePath }).then(
        (sheetNames) => {
            sheetNames.forEach((sheet, sheetindex) => {
                var blankCol
                var tableHeaders = [];
                cy.task("generateJSONFromExcel", { excelFilePath, sheet}).then(
                    (acc) => {
                        Summerypage.elements.getAccountTable().eq(sheetindex).find(".table > thead > tr > th").each((head, colindex) => {
                            let header = head.text()
                            if (header.length > 0) {
                                tableHeaders.push(header)
                            } else {
                                blankCol = colindex
                                tableHeaders.push("")
                            }
                        }).then(() => {
                            Summerypage.elements.getAccountTable().eq(sheetindex).find(".table > tbody > tr").each((row, rowindex) => {

                                cy.wrap(row).find('td').each((td, cindex) => {
                                    if (cindex != blankCol) {
                                        if (tableHeaders[cindex] == 'Account') {
                                            cy.log(acc[rowindex])
                                             cy.wrap(td).should('contain.text', acc[rowindex].Account)
                                        } else if (tableHeaders[cindex] == 'Balance') {
                                              cy.wrap(td).should('contain.text', acc[rowindex].Balance)
                                        } else if (tableHeaders[cindex] == 'Credit Card') {
                                             cy.wrap(td).should('contain.text', acc[rowindex]['Credit Card'])
                                        } else {
                                            throw ('Columns are different in test data from UI');
                                        }
                                    }
                                })
                            })

                        })

                    }
                )

            })
        }
    )
})