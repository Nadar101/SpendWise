```
let budget = 50000;
let expenses = 15000;

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

let userBudget = prompt("Enter your total budget:");
let userExpenses = prompt("Enter your total expenses:");

userBudget = Number(userBudget);
userExpenses = Number(userExpenses);

let remainingBalance = calculateBalance(userBudget, userExpenses);

console.log("===== SpendWise Budget Summary =====");
console.log("Budget: KSh " + userBudget);
console.log("Expenses: KSh " + userExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);
```
