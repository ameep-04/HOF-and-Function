let expenses = [
    {amount : 100, category: "utilities"},
    {amount:200, category: "Groceries"},
    {amount:50, categories: "entertainment"},
];

let expencesWithTax= expenses.map((expense)=> {
    let tax = expense.amount*0.1;
    return{...expense,tax:tax};
});
console.log("Expenses with Tax:",expencesWithTax);