let btnStart = document.getElementById('start'), //кнопка
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

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

btnStart.addEventListener('click', function() {
    
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");   
    }
    appData.balans = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    //Включение кнопок
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;    
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof(a))==='string' && (typeof(a)) != null 
            && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("Error!");
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';        
    }  
});

countBudgetBtn.addEventListener('click', function(){
    
    if (appData.balans != undefined) {
        appData.moneyPerDay = ((appData.balans - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay<100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay>2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function(){
    // incomeItem.addEventListener('change', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;    
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value; 
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }    
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value; 
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }     
});

const appData = {
    balans: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};