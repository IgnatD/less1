'use strict';

var money, time;

    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    balans: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};    

let q1 = prompt("Введите обязательную статью расходов в этом месяце:"),
    q2 = prompt("Во сколько обойдется?"),
    q3 = prompt("Введите обязательную статью расходов в этом месяце:"),
    q4 = prompt("Во сколько обойдется?");

appData.expenses[q1] = q1;
appData.expenses[q2] = q2;
appData.expenses[q3] = q3;
appData.expenses[q4] = q4;


console.log("Бюджет: " + money);
console.log("Период: " + time);
console.log("Расходы: " + appData.expenses[q1] + " : " + appData.expenses[q2]);
console.log("Расходы: " + appData.expenses[q3] + " : " + appData.expenses[q4]);
console.log("На день: " + appData.balans / 30);

alert(appData.balans / 30);