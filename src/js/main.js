let btnStart = document.getElementById('Start'), //кнопка
    //Получить классы в которых в название которых крисуствует value
    budgetValue             = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue          = document.getElementsByClassName('daybudget-value')[0],
	levelValue              = document.getElementsByClassName('level-value')[0],
	expensesValue           = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue   = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue             = document.getElementsByClassName('income-value')[0],
    monthSavingsValue       = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue        = document.getElementsByClassName('yearsavings-value')[0],
    //получение обязательных полей expenses-item
    expensesItem = document.getElementsByClassName('expenses-item'),
    //получение кнопок "утвердить" и "Рассчитать" через Tag 
    expensesItemBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    //Получить оставшиеся поля через querySelector
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");   
    }
}

start();

let appData = {
    balans: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце:"),
                b = +prompt("Во сколько обойдется?");    
        
            if ((typeof(a))==='string' && (typeof(a)) != null 
                && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log ("Error!");
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.balans / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay + "р.");
    }, 
    detectLevel: function() {
        if (appData.moneyPerDay<100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay>2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            
        }        
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++){
            let a = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = a;
            
        }  
        console.log(appData.optionalExpenses);         
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (перечесление через запятую)", "");

        if ((typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
            console.log("Ошибка, внесите данные!");
        } else {
            appData.income  = items.split(', ');
            appData.income.push(prompt("Может что то еще?"));
            appData.income.sort();
            
            appData.income.forEach(function(itemmass, i) {
                console.log("Способы доп. заработка: " + (i+1) + " - " + itemmass);
            });

        }
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + " --- " + appData[key]);
}