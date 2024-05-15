let expenses = [
    {amount : 100, category: "utilities"},
    {amount:200, category: "Groceries"},
    {amount:50, categories: "entertainment"},
];
let groceriesExpenses = expenses.filter(
    (expense) => expense.category === "Groceries"
);
console.log("GroceriesExpenses:", groceriesExpenses);