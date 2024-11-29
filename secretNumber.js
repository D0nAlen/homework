function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomNumber(1, 100);
console.log("Загаданное число: " + randomNumber);

let resultNumber = Math.floor((1 + 100) / 2);

function checkNumber() {
    console.log("Компьютер 2: Пробую число " + resultNumber);
    if (resultNumber < randomNumber) {
        console.log("Компьютер 1: Меньше.");
        resultNumber = getRandomNumber(resultNumber + 1, 100);
        checkNumber();
    }
    else if (resultNumber > randomNumber) {
        console.log("Компьютер 1: Больше.");
        resultNumber = getRandomNumber(1, resultNumber - 1);
        checkNumber();
    }
    else if (resultNumber == randomNumber) {
        console.log("Компьютер 1: Угадал!");
        return;
    }
}

checkNumber();