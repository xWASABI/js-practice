console.log('SECTION 4:34')
console.log('OBJECT REFERENCES')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
console.log(``)

// Variable
let num = 103.941
// Change Decimal placement
console.log(num.toFixed(20))
// Round
console.log(Math.round(num))
// Round down
console.log(Math.floor(num))
// Round up
console.log(Math.ceil(num))
// Random
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge 
// 1 - 5 = true if correct, otherwise false
let makeGuess = function (randomNumber){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return randomNumber === randomNum
}


console.log(makeGuess(3))