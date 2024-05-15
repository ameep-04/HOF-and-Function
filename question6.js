let expenses = [
    {amount : 100, category: "utilities"},
{amount:200, category: "Groceries"},
{amount:50, categories: "entertainment"},
];
function categorizeExpense(expense){
    if (expense.amount > 100) {
        return "High Expense";
    } else {
        return "Low Expense";
    }
}
let categorizedExpenses = expenses.map((expense)=>
categorizeExpense(expense));
console.log("Categorized Expenses:" , categorizedExpenses);