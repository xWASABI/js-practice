/** PROPERTIES */
let myAccount = {
    name: 'Branden M',
    balance: 1000,
    expenses: 0,
    income: 0
}

/** FUNCTIONS */
// Function to Add Expenses
let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}
// Add Income to account
let addIncome = function(account, amount){
    account.income = account.income + amount
}
// Reset Expense account
let resetExpense = function(account){
    account.expenses = 0
}
// Create balance for account
let addBalance = function(amount, amount){
    account.balance = account.balance + amount
}

// Get Account Summary
// Account for Andrew has $900. $1000 in income. $100 in expenses.
getAccountSummary = function() {
    console.log(myAccount.name + "has a ${}")
    console.log(`${myPersomyn.name} is ${myPerson.age} and lives in ${myPerson.location}`)
    console.log(`The account for ${myAccount.name} has ${myAccount.balance}`)
}

/** CALL FUNCTIONS */
// addIncome
addIncome(myAccount, 10000)
// addExpense
addExpense(myAccount, 2.50)
console.log("Coffee purchased for $2.50")
// addExpense
addExpense(myAccount, 3.50)
console.log("Napkin purchased for $3.50")
// getAccountSummary
console.log("Account Summary..", myAccount)
// resetAccount
resetExpense(myAccount, 0)
console.log("Resetting Expenses..")
// getAccountSummary
console.log("Updated Account Summary..", myAccount)
/**
addExpense(myAccount, 2.50)
console.log(myAccount)
*/
