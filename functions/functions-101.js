// Lesson
// Funcitons - input (argument), code, output (return value)
let greetUser = function () {
    console.log('Welcome users')
}

// Execute Function
greetUser()
greetUser()
greetUser()

let square = function (num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge
let convertFahrenheitToCelsius = function (num){
    let result = (num - 32) * 5 / 9
    return result
}
let value1 =  convertFahrenheitToCelsius(32)
let otherValue1 = convertFahrenheitToCelsius(68)
console.log(value1)
console.log(otherValue1)