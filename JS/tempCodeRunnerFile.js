let num = 50;

if (num < 49) {
    console.log("Ошибка")
} else if (num > 100) {
    console.log("Перебор")
} else {
    console.log("Бинго")
}

(num == 50) ? console.log("Верно") : console.log("Неверно");

switch (num) {
    case num < 49: console.log("Ошибка"); break;
    case num > 100: console.log("Перебор"); break;
    case num > 80: console.log("Много"); break;
    case num = 50: console.log("Все верно!"); break;
    default:
    console.log("Что-то пошло не так!"); break;
}