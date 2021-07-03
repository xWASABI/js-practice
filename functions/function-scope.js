// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezinkg = true
    }

    return celsius
}
let tempOne =  convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)