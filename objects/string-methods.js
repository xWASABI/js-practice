// === - Equality Operator
// !== - Not Equal operator
// >, <, >=, <= - Works as well
// Logical AND Operator && - both sides are true
// Logical OR Operator || - either side is true
// { CODE BLOCK }

// Learning
// ========================================================================================
console.log('SECTION 4:33')
console.log('STRING METHODS')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
console.log(``)

let name = `   Ben Jamin     `

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes methods
let password = 'abcd123pasword1234'
console.log(password.includes('password'))

// Trim methods
// Remove white spaces
console.log(name.trim())

console.log('')
console.log('CHALLENGE')
console.log('==== ==== ==== ==== ==== ==== ==== ====')

let isValidPassword = function(password) {
    // Alternative solution
    // "!" prior to password means NOT
    if (password.length > 8 && !password.includes('password')){
        return true
    } else {
        return false
    }
}
// return true if length is greater than 8th and does not contain the word password
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123ldkjff'))
console.log(isValidPassword('abcd123password1234'))