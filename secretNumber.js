let min = 1;
let max = 100;
let mid;

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomNumber(1, 100);
console.log("Загаданное число: " + randomNumber);

function checkNumber() {
    while (mid != randomNumber) {
        mid = Math.floor((min + max) / 2);
        console.log("Компьютер 2: Пробую число " + mid);
        if (mid > randomNumber) {
            console.log("Компьютер 1: Меньше.");
            max = mid;
        }
        else if (mid < randomNumber) {
            console.log("Компьютер 1: Больше.");
            min = mid;
        }
        else {
            console.log("Компьютер 1: Угадал!");
        }
    }
}

checkNumber();