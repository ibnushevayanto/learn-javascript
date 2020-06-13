// Function Assignment

function showAlertWithoutParameters() {
    alert('ok');
}

function showAlertWithParameters(name) {
    alert(name)
}

showAlertWithoutParameters();
showAlertWithParameters('Ibnu');

addBtn.addEventListener('click', showAlertWithoutParameters);

function combineText(text1, text2, text3) {
    const combineText = `${text1} ${text2} ${text3}`
    return combineText;
}

const combine = combineText('Ibnu', 'Shevayanto', 'Ganteng')

alert(combine)