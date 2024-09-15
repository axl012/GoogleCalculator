import { onCalculatorPage } from "./page_objects/calculatorPage";

function insertNumber(number){
    const numberList = number.split('')
    numberList.forEach(element => {
        if(element == '.'){
            onCalculatorPage.pressDot()
        } else if(element == '-') {
            onCalculatorPage.pressSubstract()
        } else {
            onCalculatorPage.pressOnNumber(element)
        }
    });
}

export class CalculatorFunctions{

    sumNumbers(numbers){
        const numbersList = numbers.split(' ')
        numbersList.forEach((number, index) => {
            insertNumber(number)
            if(numbersList.length > index+1){
                onCalculatorPage.pressPlus()
            }
        });
        onCalculatorPage.pressEquals()
    }

    multiplyNumbers(numbers){
        const numbersList = numbers.split(' ')
        numbersList.forEach((number, index) => {
            insertNumber(number)
            if(numbersList.length > index+1){
                onCalculatorPage.pressMultiply()
            }
        });
        onCalculatorPage.pressEquals()
    }

    divideNumbers(numbers){
        const numbersList = numbers.split(' ')
        numbersList.forEach((number, index) => {
            insertNumber(number)
            if(numbersList.length > index+1){
                onCalculatorPage.pressDivideBy()
            }
        });
        onCalculatorPage.pressEquals()
    }

    substractNumbers(numbers){
        const numbersList = numbers.split(' ')
        numbersList.forEach((number, index) => {
            insertNumber(number)
            if(numbersList.length > index+1){
                onCalculatorPage.pressSubstract()
            }
        });
        onCalculatorPage.pressEquals()
    }


}

export const performOperation = new CalculatorFunctions()