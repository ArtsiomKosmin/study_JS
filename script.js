'use strict';
let money = +prompt('Ваш месячный доход?', 1000);
let income = '100';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, квартплата, коммуналка');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1500;
let period = 5;
let expenses1 = prompt('Введите обязательную статью расходов?', 'бензин');
let amount1 = +prompt('Во сколько это обойдется?', 400);
let expenses2 = prompt('Введите обязательную статью расходов?', 'кварплата');
let amount2 = +prompt('Во сколько это обойдется?', 200);

let showTypeOf = function(data) {
    return console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth = function(amount1, amount2) {
    let sum = amount1 + amount2;
    return sum;
};

console.log('Сумма обязательных расходов:', getExpensesMonth(amount1, amount2));

console.log(addExpenses.toLowerCase().split(', '));

let getAccumulatedMonth = function(getExpensesMonth, money) {
    let totalSum = money - getExpensesMonth;
    return totalSum;
};

console.log('Вы накопили:', getAccumulatedMonth(getExpensesMonth(amount1, amount2), money));

let accumulatedMonth = getAccumulatedMonth(getExpensesMonth(amount1, amount2), money);

console.log('Вывод переменной accumulatedMonth: ', accumulatedMonth);

let getTargetMonth = function(accumulatedMonth, mission) {
    return mission / accumulatedMonth;
};

console.log('Цель будет достигнута за ' + getTargetMonth(accumulatedMonth, mission) + ' месяца');

let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день: ', budgetDay);

let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay < 1200 && budgetDay > 600 ) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay > 0) {
        return('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return('Что то пошло не так');
    }
};

console.log('Уровень дохода: ', getStatusIncome());
