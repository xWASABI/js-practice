// Multiple arguments
let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

// Def arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' Score: ' + score  
    // Template string
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge
console.log(' ')
console.log("### Challenge")

// total, tipPercent (decimal)
let getTipPercent = function(total = 0, tip = 0){
    return 'Total: $' + total + ' Tip: $' + tip 
}

let totalWithTip = getTipPercent(33, 33 * 0.2)
console.log(totalWithTip)

// Template Strings
console.log(' ')
console.log("### Template Strings")

console.log('Branden' + 'Manibusan')
let name = 'Branden'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} this years old!`)

// Challenge
console.log('')
console.log('### Challenge')

let getTipPercent2 = function(total, tip = .2){
    return `The total for your dinner is ${total} and the expected tip with ${tip} percentage would be ${total * tip}`

}

let getTipPercen2 = getTipPercent2(100, .50)
console.log(getTipPercen2)