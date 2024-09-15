import { onHomePage } from "../support/page_objects/homePage"
import { onCalculatorPage } from "../support/page_objects/calculatorPage"
import { performOperation } from "../support/calculatorFunctions"

describe('template spec', () => {

  beforeEach('Open Google Calculator Page', () => {
    cy.OpenGooglw()
    onHomePage.typeInSearchBar('Calculator')
  })

  it('sum numbers', () => {
    performOperation.sumNumbers('3 4 5')
    onCalculatorPage.resultShouldEqual(12)

  })

  it('multiply numbers', () => {
    performOperation.multiplyNumbers('3 4 5')
    onCalculatorPage.resultShouldEqual(60)

  })

  it('divide numbers', () => {
    performOperation.divideNumbers('3 -4 5')
    onCalculatorPage.resultShouldEqual(-0.15)

  })

  it('Substract numbers', () => {
    performOperation.substractNumbers('12.5 7')
    onCalculatorPage.resultShouldEqual(5,5)

  })
})