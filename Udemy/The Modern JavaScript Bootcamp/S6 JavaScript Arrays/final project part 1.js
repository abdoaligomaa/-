// this is the final project of the section 
// this project he put it in the array folder 
const account = {
    name: 'abdoali',
    expenses: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            descriptions: description,
            amounts: amount,
        })

    },
    expenseSamary: function() {
        let totalExpense = 0
        this.expenses.forEach(function(expese) {
            totalExpense = totalExpense + expese.amounts
        })
        return `my name is ${this.name}, and my expenses is $${totalExpense} `
    }
}
account.addExpense('learn english', 1000)
account.addExpense('learn programing ', 800)
const samary = account.expenseSamary()
console.log(samary)