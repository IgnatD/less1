'use strict';

// var money, time;

//     money = prompt("Ваш бюджет на месяц?");
//     time = prompt("Введите дату в формате YYYY-MM-DD");

// let appData = {
//     balans: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };    

// let q1 = prompt("Введите обязательную статью расходов в этом месяце:"),
//     q2 = prompt("Во сколько обойдется?"),
//     q3 = prompt("Введите обязательную статью расходов в этом месяце:"),
//     q4 = prompt("Во сколько обойдется?");

// appData.expenses[q1] = q1;
// appData.expenses[q2] = q2;
// appData.expenses[q3] = q3;
// appData.expenses[q4] = q4;


// console.log("Бюджет: " + money);
// console.log("Период: " + time);
// console.log("Расходы: " + appData.expenses[q1] + " : " + appData.expenses[q2]);
// console.log("Расходы: " + appData.expenses[q3] + " : " + appData.expenses[q4]);
// console.log("На день: " + appData.balans / 30);

// alert(appData.balans / 30);

// if (2*4 == 8) {
//     console.log("Верно!")
// }   else {
//     console.log("Неверно!")
// }

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