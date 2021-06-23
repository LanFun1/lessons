'use strict'
let mission = 1000000;
let appData = new Object();

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;    
let costs = [];

let start = function() {
  do {
    money = prompt("Ваш месячный доход?");
  }
  while(!isNumber(money));
};
start();

appData.asking = function (){
  appData.addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
  appData.deposit = confirm("Есть ли у вас депозит в банке?");
  while(!isNumber(costs[2]) || !isNumber(costs[3])){
      costs[0] = prompt("Введите обязательную статью расходов?");
      costs[2] = prompt("Во сколько это обойдется?");
      costs[1] = prompt("Введите обязательную статью расходов?");
      costs[3] = prompt("Во сколько это обойдется?");
  }
  appData.expenses = new Object();
  appData.expenses[costs[0]] = +costs[2];
  appData.expenses[costs[1]] = +costs[3];
  
}
appData.asking();

appData.getBudget = function getBudget(money, cost, cost1, data){
  if(data === 1)
  {
    appData.budgetMonth= money - (cost+cost1);
  }
  else{
    appData.budgetDay = Math.floor((money - (cost+cost1)) / 30);
  }
}
appData.getBudget(money, +costs[2], +costs[3], 1);
appData.getBudget(money, +costs[2], +costs[3], 2);


appData.ExpensesMonth = 0;

appData.buget = money;
appData.ExpensesMonth = function (){
  let sum = 0;
  for(let key in appData.expenses){
    sum += appData.expenses[key];
  }
  return +sum;
};
appData.getTargetMonth = function (accumulatedMonth, mission){
  let mathCeil = Math.ceil(mission/accumulatedMonth);
  if(mathCeil >= 0)
  {
    return mathCeil;
  }
  else{
    return "Цель не будет достигнута";
  }
};
appData.getStatusIncome = function (budgetDay){
  if(budgetDay >= 1200 ){
    return("У вас высокий уровень дохода");
  }
  else if(budgetDay >= 600){
    return("У вас средний уровень дохода");
  }
  else if(budgetDay >= 0){
    return("К сожалению у вас уровень дохода ниже среднего");
  }
  else{
    return("Что то пошло не так");
  }
};
console.log(appData);
console.log(appData.ExpensesMonth());
console.log(appData.getTargetMonth(appData.budgetMonth, mission));
console.log(appData.getStatusIncome(appData.budgetDay));
console.log("Наша программа включает в себя данные:\n");
for(let key in appData){
  console.log("Ключ: "+key+"\tЗначениие: "+appData[key]);
}
