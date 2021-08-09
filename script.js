'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let money;

let start = function() {
    do {
        money = +prompt('Ваш месячный доход?', 1000);
    } 
    while (!isNumber(money));
    return money;
};

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1500,
    period: 5,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    budget: 0,
    asking: function(){
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.budget = start();
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, квартплата, коммуналка');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');

        for (let i = 0; i < 2; i++) {
            let expensed = prompt('Введите обязательную статью расходов?', 'бензин');
            let amount1 = +prompt('Во сколько это обойдется?', 400);
            appData.expenses[expensed] = amount1;
        }

    },

    getExpensesMonth: function() {
        let sum = 0;
        for (let key in appData.expenses) {
            if (isNumber(appData.expenses[key])) {
                sum += appData.expenses[key];
            }
        }
        appData.expensesMonth = sum;
    },

    getBudget: function() { 
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },

    getTargetMonth: function() {
        let targetMonth = appData.mission / appData.budgetMonth;
        if (targetMonth > 0) {
            return console.log('Цель будет достигнута за ' + targetMonth + ' месяца');
        } else {
            return console.log('Цель не будет достигнута');
        }
    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay < 1200 && appData.budgetDay > 600 ) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            return('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return('Что то пошло не так');
        }
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Сумма обязательных расходов за месяц:', appData.expensesMonth);

console.log('Уровень дохода: ', appData.getStatusIncome());


for (let key in appData) {
    console.log('Наша программа включает в себя следующие данные: ' + key + ' : ' + appData[key]);
}