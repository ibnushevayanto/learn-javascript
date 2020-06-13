import addFunction from "./addFunction.js";

const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, `${currentResult} + ${userInput.value}`);
}

addBtn.addEventListener('click', add);