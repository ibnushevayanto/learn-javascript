const STRONG_ATTACK_VALUE = 30;
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;
let bonusLife = true;

let setMaxHp = +prompt('Set Max Hp ', '100');

if (isNaN(setMaxHp) || setMaxHp <= 0) {
    setMaxHp = 100
}

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

// LOG
const LOG = [];

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const chooseMaxLife = setMaxHp;

let currentMonsterLife = chooseMaxLife;
let currentPlayerHealth = chooseMaxLife;

adjustHealthBars(chooseMaxLife);

function writeLog(ev, val, monsterHealth, playerHealth) {
    const logEntry = {
        event: ev,
        value: val,
        target: null,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry.target = 'GAME OVER';
            break;
        default:
            logEntry = {};
            break;
    }

    LOG.push(logEntry);
    console.log(LOG);
}

function reset() {
    currentPlayerHealth = chooseMaxLife;
    currentMonsterLife = chooseMaxLife;
    resetGame(chooseMaxLife);
}

function endRound() {
    const damageFromMonster = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    const initialPlayerHealth = currentPlayerHealth;
    currentPlayerHealth -= damageFromMonster;

    writeLog(LOG_EVENT_MONSTER_ATTACK, damageFromMonster, currentMonsterLife, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && bonusLife) {
        bonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be died but the bonus life saved you!');
    }


    if (currentMonsterLife <= 0 && currentPlayerHealth > 0) {
        writeLog(LOG_EVENT_GAME_OVER, 'PLAYER_WON', currentMonsterLife, currentPlayerHealth);
        alert('You Won');
    } else if (currentPlayerHealth <= 0 && currentMonsterLife > 0 && !bonusLife) {
        writeLog(LOG_EVENT_GAME_OVER, 'PLAYER_LOSE', currentMonsterLife, currentPlayerHealth);
        alert('You Lose');
    } else if (currentPlayerHealth <= 0 && currentMonsterLife <= 0) {
        writeLog(LOG_EVENT_GAME_OVER, 'DRAW', currentMonsterLife, currentPlayerHealth);
        alert('You Have A Draw');
    }

    if (currentMonsterLife <= 0 || currentPlayerHealth <= 0) {
        if (confirm('Do You Wanna Play Again ?')) {
            reset();
        }
    }


}

function attackMonster(mode) {
    let maxDamage;

    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterLife -= damage;

    writeLog((mode === MODE_ATTACK) ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK, damage, currentMonsterLife, currentPlayerHealth);

    endRound();
}

function normalAttack() {
    attackMonster(MODE_ATTACK);
}

function strongAttack() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayer() {
    let healValue;


    if (currentPlayerHealth > chooseMaxLife - HEAL_VALUE) {
        alert('You cant heal more than your max hp');
        healValue = chooseMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    writeLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterLife, currentPlayerHealth);

    endRound();
    increasePlayerHealth(healValue);
}

attackBtn.addEventListener('click', normalAttack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healPlayer);