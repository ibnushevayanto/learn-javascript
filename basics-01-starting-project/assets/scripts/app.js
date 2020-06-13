const defaultResult = 0;
let currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculateDescription = `( ${defaultResult}  + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculateDescription);