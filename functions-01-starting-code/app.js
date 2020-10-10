const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_CHOICE = ROCK;

const RESULT = {
    WIN: 'PLAYER WIN',
    LOSE: 'COMPUTER WIN',
    DRAW: 'DRAW'
};

let gameStart = false;

// ? Kenapa Cara Menggunakan Functionnya Seperti Dibawah. Max.Content[129]
const fnUserChoice = function () {
    const SELECTION = prompt(`Pilih Antara ${ROCK}, ${PAPER}, Dan ${SCISSOR}`, '').toUpperCase();

    if (
        SELECTION !== ROCK &&
        SELECTION !== PAPER &&
        SELECTION !== SCISSOR
    ) {
        alert('Pilihan anda tidak ada dalam pilihan maka anda berasumsi memilih ROCK');
        return;
    } else {
        return SELECTION;
    }
};

const fnComputerChoice = function () {
    const random = Math.random();
    return (random < 0.34) ? ROCK : (random < 0.64) ? PAPER : SCISSOR
};

// * Default Value Digunakan Jika Parameter Kedua Undefined
const gameLogic = function (cChoice, pChoice = DEFAULT_CHOICE) {
    if (cChoice === pChoice) {
        return RESULT.DRAW;
    } else if (
        pChoice === PAPER && cChoice === ROCK ||
        pChoice === ROCK && cChoice === SCISSOR ||
        pChoice === SCISSOR && cChoice === PAPER
    ) {
        return RESULT.WIN;
    } else {
        return RESULT.LOSE;
    }
};

startGameBtn.addEventListener('click', (e) => {

    if (gameStart) {
        return;
    }
    gameStart = true;
    const userChoice = fnUserChoice();
    const computerChoice = fnComputerChoice();

    const result = gameLogic(computerChoice, userChoice);

    let message = `You Pick A ${userChoice || DEFAULT_CHOICE} And Computer Pick A ${computerChoice}.`;
    if (result === RESULT.WIN) {
        message += 'You Win!!!'
    } else if (result === RESULT.LOSE) {
        message += 'You Lose!!!';
    } else if (result === RESULT.DRAW) {
        message += 'Draw!!!';
    }

    alert(message);
    gameStart = false;

});

const combine = (resultHandler, type, ...numbers) => {
    // * parameter numbers akan menjadi array, isi array sesuai dengan parameter yang dimasukkan

    // * Membuat Function Dalam Function Diperbolehkan
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : parseInt(number);
    }

    let result = 0;

    for (const number of numbers) {
        if (type === 'SUM') {
            result += validateNumber(number);
        } else if (type === 'MIN') {
            result -= validateNumber(number);
        }
    }

    resultHandler(result);
};

// * Function Bind Selalu Berada Pada Diawal Parameter 
const showResult = (message, samaDengan, result) => {
    console.log(message + samaDengan + result);
}

// * Bisa Menggunakan Function Sebagai Parameter
// * Function Bind Berguna Untuk Menginject Parameter Sebanyak Apapun Yang Kita Mau
// * Contoh Dibawah Berarti Menginject 2 Parameter Dalam Function
combine(showResult.bind(this, 'Hasil Pertambahannya Adalah', ' = '), 'SUM', 1, 2, 3, 4, 5, 'asjakshasj', 8, 10);
combine(showResult.bind(this, 'Hasil Pengurangannya Adalah', ' = '), 'MIN', 1, 2, 0);