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

function add() {
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    addLog('ADD', initialResult, enteredNumber, currentResult)
    writeOutput('+', initialResult, enteredNumber);
}

function min() {
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    addLog('DECREASE', initialResult, enteredNumber, currentResult)
    writeOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    addLog('MULTIPLY', initialResult, enteredNumber, currentResult)
    writeOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    addLog('DIVIDE', initialResult, enteredNumber, currentResult)
    writeOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', min)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)