"use strict";

let money,
  income = "teaching",
  addExpenses = "Rent, Bus, Mobile, Internet",
  deposit = true,
  mission = 200000,
  period = 12;

var budgetDay = 180000 / 30;
addExpenses = prompt(
  "possible expenses: ",
  "cinema, circus"
);

const haveDeposit = confirm("do you have deposit? (yes/no) ");

// const expenses1 = prompt("obligatory expenses1: ", "school");
// const expenses2 = prompt("obligatory expenses2: ", "doctor");

// const amount1 = +prompt("amout1: ", 30000);
// const amount2 = +prompt("amount2: ", 55000);

let showTypeOf = function (data) {
  console.log(data, typeof data);
};

// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);

// lesson 5
console.log("----------------------------------");
console.log("lesson_05");
console.log("----------------------------------");

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function () {
  do {
    money = prompt("money per month: ");
  } while (!isNumber(money));
};

start();

let expenses = [];

function getExpensesMonth() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let amount;
    expenses[i] = prompt("obligatory expenses: ");
    while (!isNumber(amount)) {
      amount = prompt("expenses amount: ");
    }
    sum += +amount;
  }
  return sum;
}

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth() {
  return money - expensesAmount;
}

console.log("money " + money);
console.log("----------------------------------");
console.log("obligatory expenses: ");
console.log(expenses);
console.log("----------------------------------");
console.log("expenses per month: " + expensesAmount);
console.log("----------------------------------");
console.log("possible expenses: ");
console.log(addExpenses.toLowerCase().split(", "));
console.log("----------------------------------");

const accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}

let targetMonth = getTargetMonth();

let canReachGoal = function() {
  if (targetMonth >= 0) {
    return ("you can reach the goal!");
  } else {
    return ("the goal cannot be reached:((");
  }
};

console.log("mission: " + mission);
console.log("getTargetMonth: " + targetMonth);
console.log("----------------------------------");
console.log("check if you can reah the goal: " + canReachGoal());
console.log("----------------------------------");

budgetDay = Math.round(accumulatedMonth / 30);
console.log("budget day: " + budgetDay);

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return "high income";
  } else if (600 <= budgetDay && budgetDay < 1200) {
    return "middle income";
  } else if (0 <= budgetDay && budgetDay < 600) {
    return "low income";
  } else {
    return "something went wrong";
  }
};

console.log("status:  " + getStatusIncome());
