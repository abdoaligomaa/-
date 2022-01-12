let abdoAccount = { // this is my account object 
    name: 'abdo ali',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount // adding the amount to my expenses 
}

let addIncome = function(account, income) { // adding the amount to my income 
    account.income = account.income + income
}

let resetAccount = function(account) { // reset my account ,make expenses 0 and income 0
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) { // print my account information 
    let myBalance = account.income - account.expenses
    return `Account for ${account.name} has $${myBalance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(abdoAccount, 1000)
addExpense(abdoAccount, 110)
addExpense(abdoAccount, 800)
console.log(getAccountSummary(abdoAccount))
resetAccount(abdoAccount)
console.log(getAccountSummary(abdoAccount)) // the result is 0,0