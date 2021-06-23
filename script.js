'use strict'
let mission = 1000000;
let appData = new Object();

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;    
let costs = [];


appData.asking = function (){
  appData.addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
  appData.deposit = confirm("Есть ли у вас депозит в банке?");
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
appData.expenses = appData.asking();
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
let exp = appData.ExpensesMonth();
console.log('exp: ', exp);
let target = appData.getTargetMonth(appData.budgetMonth, mission);
console.log('target: ', target);
let status = appData.getStatusIncome(appData.budgetDay);
console.log('status: ', status);
/* console.log(appData.getStatusIncome); */
console.log("Наша программа включает в себя данные:\n");
for(let key in appData){
  console.log("Ключ: "+key+"\tЗначениие: "+appData[key]);
}
