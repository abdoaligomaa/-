let abdoAccount = { // this is my account object 
    name: 'abdo ali',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount // adding the amount to my expenses 
}
addExpense(abdoAccount, 100)

console.log(abdoAccount.expenses) // the result is 100.