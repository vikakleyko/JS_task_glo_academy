var money = 120000;
var income = "teaching";
var addExpenses = "Rent, Bus, Mobile, Internet";
var deposit = true;
var mission = 200000;
var period = 12;

console.log("money " + money);
console.log("income " + income);
console.log("deposit " + deposit);
console.log("addExpenses length " + addExpenses.length);
console.log(
  "period is equal to " +
    period +
    " months and the goal is " +
    mission +
    " rubles"
);

console.log("addExpenses lower case " + addExpenses.toLowerCase());

console.log("addExpenses array ");
console.log(addExpenses.split(", "));

var budgetDay = 180000 / 30;
console.log("budgetDay  " + budgetDay);


// lesson 3
money = +prompt("money per month: ");
console.log("money: " + money);

addExpenses = prompt("possible expenses (school, doctor, etc): ");

const haveDeposit = confirm("do you have deposit? (yes/no) ");

const expenses1 = prompt("obligatory expenses1: ");
const expenses2 = prompt("obligatory expenses2: ");
console.log("obligatory expenses: " + expenses1, expenses2);

const amount1 = +prompt("amout1: ");
const amount2 = +prompt("amount2: ");

var budgetMonth = money - amount1 - amount2;
console.log("budget month: " + budgetMonth);

console.log("mission: " + mission);

var savingsPerMonth = Math.ceil(mission/budgetMonth);
console.log("you can reach your mission in : " + savingsPerMonth + " months");

budgetDay =  Math.round(budgetMonth / 30);
console.log("budget day: " + budgetDay);

if (budgetDay >= 1200 ) {
    console.log("high income");
} else 
if ( 600 <= budgetDay && budgetDay < 1200) {
    console.log("middle income");
} else 
if ( 0 <= budgetDay && budgetDay < 600) {
    console.log("low income");
} else {
    console.log("something went wrong");
}

