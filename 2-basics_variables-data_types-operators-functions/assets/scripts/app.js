// import addFunction from "./addFunction.js";

const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function getUserInputValue() {
    return +userInput.value;
}

function writeOutput(operator, initialResult, enteredNumber) {
    const output = `${initialResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, output);
}

function addLog(operationIdentifier, prevResult, enteredNumber, result) {
    const log = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: enteredNumber,
        result: result
    };
    logEntries.push(log)
    console.table(logEntries)
}

function calculateResult(calculateType) {
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    let mathOperator;
    addLog(calculateType, initialResult, enteredNumber, currentResult)
    if (calculateType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculateType === 'DECREASE') {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculateType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculateType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }

    if (typeof mathOperator !== 'undefined') {
        writeOutput(mathOperator, initialResult, enteredNumber);
    } else {
        alert('Mohon Masukkan Format Yang Benar');
    }

}

function add() {
    calculateResult('ADD');
}

function min() {
    calculateResult('DECREASE');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIV');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', min)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)