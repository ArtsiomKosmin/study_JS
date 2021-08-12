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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1500,
    period: 5,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    budget: 0,
    asking: function(){

        appData.budget = start();
        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let cashIncome;
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксист');
            } while (isNumber(itemIncome));
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 2000);
            } while (!isNumber(cashIncome));
        }

        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, квартплата, коммуналка');
        } while (isNumber(addExpenses));

        appData.addExpenses = addExpenses.toLowerCase().split(', ');

        for (let i = 0; i < 2; i++) {
            let expensed;
            do {
                expensed = prompt('Введите обязательную статью расходов?', 'бензин');
            } while (isNumber(expensed));
            let amount1;
            do {
                amount1 = +prompt('Во сколько это обойдется?', 400);
            } while (!isNumber(amount1));
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
            console.log('Цель будет достигнута за ' + targetMonth + ' месяца');
        } else {
            console.log('Цель не будет достигнута');
        }
    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay < 1200 && appData.budgetDay > 600 ) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            let percent;
            let moneyInBank;
            do {
                percent = prompt('Какой годовой процент?', 10);
            } while (!isNumber(percent));
            do {
                moneyInBank = prompt('Какая сумма заложена?', 3000);
            } while (!isNumber(moneyInBank));
        }
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

console.log('Сумма обязательных расходов за месяц:', appData.expensesMonth);

console.log('Уровень дохода: ', appData.getStatusIncome());


for (let key in appData) {
    console.log('Наша программа включает в себя следующие данные: ' + key + ' : ' + appData[key]);
}

for(let i = 0; i < appData.addExpenses.length; i++) {
    appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
}
console.log(appData.addExpenses.join(', '));


const buttonStart = document.getElementById('start');
console.log(buttonStart);

const buttonPlusOne = document.getElementsByTagName('button')[0];
console.log(buttonPlusOne);

const buttonPlusTwo = document.getElementsByTagName('button')[1];
console.log(buttonPlusTwo);

const depositCheck = document.querySelector('#deposit-check');
console.log(depositCheck);

const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(additionalIncomeItem);

const resultBudgetDay = document.getElementsByClassName('budget_day-value');
console.log(resultBudgetDay);

const resultExpensesMonth = document.getElementsByClassName('expenses_month-value');
console.log(resultExpensesMonth);

const resultAdditionalIncome = document.getElementsByClassName('additional_income-value');
console.log(resultAdditionalIncome);

const resultAdditionalExpenses = document.getElementsByClassName('additional_expenses-value');
console.log(resultAdditionalExpenses);

const resultIncomePeriod = document.getElementsByClassName('income_period-value');
console.log(resultIncomePeriod);

const resultTargetMonth = document.getElementsByClassName('target_month-value');
console.log(resultTargetMonth);

const salaryAmount = document.querySelector('.salary-amount');
console.log(salaryAmount);

const incomeTitle = document.querySelector('.income-items>.income-title');
console.log(incomeTitle);

const incomeAmount = document.querySelector('.income-amount');
console.log(incomeAmount);

const expensesTitle = document.querySelector('.expenses-items>.expenses-title');
console.log(expensesTitle);

const expensesAmount = document.querySelector('.expenses-amount');
console.log(expensesAmount);

const additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItem);

const targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);

const periodSelect = document.querySelector('.period-select');
console.log(periodSelect);
