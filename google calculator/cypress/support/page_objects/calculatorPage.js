export class CalculatorPage{

    pressDot(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(4).contains('.').click()
        })
    }
    
    pressEquals(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(4).contains('=').click()
        })
    }

    pressPlus(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(4).contains('+').click()
        })
    }

    pressSubstract(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(3).contains('−').click()
        })
    }

    pressDivideBy(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(1).contains('÷').click()
        })
    }

    pressMultiply(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(2).contains('×').click()
        })
    }

    pressClear(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(0).contains('CE').click()
        })
    }

    pressOpenParenthesis(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(0).contains('(').click()
        })
    }

    pressCloseParenthesis(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(0).contains(')').click()
        })
    }

    pressPercentage(){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).find('tr').eq(0).contains('%').click()
        })
    }

    pressOnNumber(number){
        cy.get('.ElumCf').then( tableRow => {
            cy.wrap(tableRow).contains(number).click()
        })
    }

    resultShouldEqual(expectedResult){
        cy.get('#cwos').first().then( result => {
           cy.wrap(result).should('contain',expectedResult)
        })
    }

    


}

export const onCalculatorPage = new CalculatorPage()