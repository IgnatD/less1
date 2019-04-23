'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    balans: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};    

// let q1 = prompt("Введите обязательную статью расходов в этом месяце:"),
//     q2 = prompt("Во сколько обойдется?"),
//     q3 = prompt("Введите обязательную статью расходов в этом месяце:"),
//     q4 = prompt("Во сколько обойдется?");

// appData.expenses.q1 = q2;
// appData.expenses.q3 = q4;
// console.log("Бюджет: " + money);
// console.log("Период: " + time);
// console.log("Расходы: " + appData.expenses[q1] + " : " + appData.expenses[q2]);
// console.log("Расходы: " + appData.expenses[q3] + " : " + appData.expenses[q4]);
// console.log("На день: " + appData.balans / 30);

// for (let i = 0; i < 2; i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце:"),
//         b = prompt("Во сколько обойдется?");    

//     if ((typeof(a))==='string' && (typeof(a)) != null 
//         && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log ("Error!");
//         i--;
//     }
// };

// let i=0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце:"),
//         b = prompt("Во сколько обойдется?");    

//     if ((typeof(a))==='string' && (typeof(a)) != null 
//         && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        
//             console.log("done");
//         appData.expenses[a] = b;
    
//     } else {
       
//         console.log ("Error!");
//         i--;
    
//     }
//     i++;
// };

let i=0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце:"),
        b = prompt("Во сколько обойдется?");    

    if ((typeof(a))==='string' && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        
            console.log("done");
        appData.expenses[a] = b;
    
    } else {
       
        console.log ("Error!");
        i--;
    
    }
    i++;
} while (i < 2)

appData.moneyPerDay = appData.balans / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay<100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay>2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};

let y = 1; let x = y = 2; alert(x);