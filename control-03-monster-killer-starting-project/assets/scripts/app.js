const STRONG_ATTACK_VALUE = 30;
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;
let bonusLife = true;

const chooseMaxLife = 100;
let currentMonsterLife = chooseMaxLife;
let currentPlayerHealth = chooseMaxLife;

adjustHealthBars(chooseMaxLife);

function reset() {
    currentPlayerHealth = chooseMaxLife;
    currentMonsterLife = chooseMaxLife;
    resetGame(chooseMaxLife);
}

function endRound() {
    const damageFromMonster = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    const iniitialPlayerHealth = currentPlayerHealth;
    currentPlayerHealth -= damageFromMonster;

    if (currentPlayerHealth <= 0 && bonusLife) {
        bonusLife = false;
        removeBonusLife();
        currentPlayerHealth = iniitialPlayerHealth;
        setPlayerHealth(iniitialPlayerHealth);
        alert('You would be died but the bonus life saved you!');
    }


    if (currentMonsterLife <= 0 && currentPlayerHealth > 0) {
        alert('You Won');
    } else if (currentPlayerHealth <= 0 && currentMonsterLife > 0 && !bonusLife) {
        alert('You Lose');
    } else if (currentPlayerHealth <= 0 && currentMonsterLife <= 0) {
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

    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterLife -= damage;

    endRound();
}

function normalAttack() {
    attackMonster('ATTACK');
}

function strongAttack() {
    attackMonster('STRONG_ATTACK');
}

function healPlayer() {
    let healValue;

    if (currentPlayerHealth > chooseMaxLife - HEAL_VALUE) {
        alert('You cant heal more than your max hp');
        healValue = chooseMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    endRound();
    increasePlayerHealth(healValue);
}

attackBtn.addEventListener('click', normalAttack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healPlayer);