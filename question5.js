let expenses = [
{amount : 100, category: "utilities"},
{amount:200, category: "Groceries"},
{amount:50, categories: "entertainment"},
];
let totalExpenses = expenses.reduce((acc, expense)=> acc + expense.amount, 0);
console.log("TotalExpenses:", totalExpenses);