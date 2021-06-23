'use strict'
let mission = 1000000;
let appData = new Object();

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;    
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let costs = [];


function asking(){
  for(let i = 0; i < 2; i++){
    costs[i] = prompt("Введите обязательную статью расходов?");
  }
  while(!isNumber(costs[2]) || !isNumber(costs[3])){
      costs[2] = prompt("Во сколько это обойдется?");
      costs[3] = prompt("Во сколько это обойдется?");
  }
  let answer = new Object();
  answer[costs[0]] = +costs[2];
  answer[costs[1]] = +costs[3];
  
  return answer;
}
appData.expenses = asking();
let start = function() {
  do {
    money = prompt("Ваш месячный доход?");
  }
  while(!isNumber(money));
};

start();


function getBudget(money, cost, cost1, data){
  if(data === 1)
  {
    let budgetMonth = money - (cost+cost1);
    return budgetMonth;
  }
  else{
    let budgetDay = Math.floor((money - (cost+cost1)) / 30);
    return budgetDay;
  }
}

appData.budgetMonth = getBudget(money, +costs[2], +costs[3], 1);
appData.budgetDay = getBudget(money, +costs[2], +costs[3], 2);


function getTargetMonth(accumulatedMonth, mission){
  let mathCeil = Math.ceil(mission/accumulatedMonth);
  if(mathCeil >= 0)
  {
    return mathCeil;
  }
  else{
    return "Цель не будет достигнута";
  }
}



function getStatusIncome(budgetDay){
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
}

appData.ExpensesMonth = 0;

function getExpensesMonth(){
  let sum = 0;
  for(let key in appData.expenses){
    sum += appData.expenses[key];
  }
  return +sum;
}
appData.buget = money;
appData.ExpensesMonth = getExpensesMonth();
appData.getTargetMonth = getTargetMonth(appData.budgetMonth, mission);
appData.getStatusIncome = getStatusIncome(appData.budgetDay);
console.log(appData);
console.log(appData.ExpensesMonth);
console.log(appData.getTargetMonth);
console.log(appData.getStatusIncome);
console.log("Наша программа включает в себя данные:\n");
for(let key in appData){
  console.log("Ключ: "+key+"\tЗначениие: "+appData[key]);
}
