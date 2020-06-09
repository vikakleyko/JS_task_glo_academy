var money = 120000;
var income = "teaching";
var addExpenses = "Rent, Bus, Mobile, Internet";
var deposit = true;
var mission = 200000;
var period = 12;

var budgetDay = 180000 / 30;

money = +prompt("money per month: ", money);

addExpenses = prompt("possible expenses (school, doctor, etc): ", "cinema, circus");

const haveDeposit = confirm("do you have deposit? (yes/no) ");

const expenses1 = prompt("obligatory expenses1: ", "school");
const expenses2 = prompt("obligatory expenses2: ", "doctor");

const amount1 = +prompt("amout1: ", 30000);
const amount2 = +prompt("amount2: ", 55000);


// lesson 4
console.log("----------------------------------");
console.log("lesson_04");
console.log("----------------------------------");

let showTypeOf = function(data) {
  "use strict";
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth(a, b) {
  "use strict";
  return a + b;
}

function getAccumulatedMonth(money, a, b) {
  "use strict";
  return money - a - b;
}

console.log("money " + money);
console.log("obligatory expenses: " + expenses1 + ", " + expenses2);
console.log("getExpensesMonth: " + getExpensesMonth(amount1, amount2));
console.log("possible expenses: ");
console.log(addExpenses.split(", "));

const accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

function getTargetMonth() {
  "use strict";
  return Math.ceil(mission / accumulatedMonth);
}

console.log("mission: " + mission);
console.log("getTargetMonth: " + getTargetMonth());

budgetDay = Math.round(accumulatedMonth / 30);
console.log("budget day: " + budgetDay);

let getStatusIncome = function() {  
  "use strict";
  if (budgetDay >= 1200) {
    return ("high income");
  } else if (600 <= budgetDay && budgetDay < 1200) {
    return ("middle income");
  } else if (0 <= budgetDay && budgetDay < 600) {
    return ("low income");
  } else {
    return ("something went wrong");
  }
};

console.log("getStatusIncome:  " + getStatusIncome());