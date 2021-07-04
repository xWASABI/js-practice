// === - Equality Operator
// !== - Not Equal operator
// >, <, >=, <= - Works as well

// SECTION 3:16
// Learning
console.log('====== LEARNING AREA ======')

let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked){
    console.log('Is account locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
}
else {
    console.log('Welcome')
}

// Challenge
console.log('====== CHALLENGE AREA ======')
let temp = 111
// It is Freezing Outside
if (temp <= 30){
    console.log('It is freezing Outside')
    
} 
// It is hot Outside
else if (temp >= 100){
    console.log('It is hot outside')
}
// Go for it. It is pretty nice
else {
    console.log('It is Pretty outside')
}

// SECTION 3:17
// Learning
console.log('====== LEARNING AREA ======')
let temp = 55
// Logical AND Operator && - both sides are true
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside')
}
// Logical OR Operator || - either side is true
else if (temp <= 0 || temp >= 120 ){
    console.log('hide inside')
} else {
    console.log('do what you want')
}

// Challenge
console.log('')
console.log('====== CHALLENGE AREA ======')

let isGuessOneVegan = false
let isGuessTwoVegan = false

// Are both vegan? Only offer up vegan dishes
if (isGuessOneVegan && isGuessTwoVegan){
    console.log('Vegan Dishes')
}
// At least one vegan? Make sure to offer up sone vegan option
else if (isGuessOneVegan || isGuessTwoVegan){
    console.log('Vegan Dishes')
    console.log('Regular Dishes')
}
// Else Offer up anything
else {
    console.log('Regular Dishes')
}

// SECTION 3:18-1
// Lexical Scoping (Static Scope)
// Learning
console.log('====== LEARNING AREA ======')
// Global Scope 
let varOne = 'varOne'

if (true){
    console.log(varOne)
    // Local Scope
    let varTwo = 'varTwo'

    if (true){
        // Local Scope
        let varFour = 'varFour'
    }
}

if (true){
    // Local Scope
    let varThree = 'varThree'
}
console.log(varTwo)

// SECTION 3:18-2
// Learning
// Global ()
  // Local ()
     // Local
  // Local

  console.log('====== LEARNING AREA ======')

  let name = 'Branden'
  
  if (true){
      let name = 'Ben'
      if (true){
          name = 'Rem'
          console.log(name)
      }
  }
  
  if (true){
      console.log(name)
  }

  // SECTION 4:21 - FUNCTION BASICS
// Learning
console.log('')
console.log('====== LEARNING AREA ======')

// Function - input (argument), code, output (return value)
let greetUser = function() {
    console.log('helloworld')
}

greetUser()

let square = function(num){
    let result = num * num
    return result
}
let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge
console.log('')
console.log('====== CHALLENGE AREA ======')
// Convert Fahrenheit To Celsius
let fahrenheightToCels = function(cels){
    let celsius = (cels - 32) * 5 / 9
    return celsius
}
// Cell a couple of times (32 -> 0) (60 -> 20)
let celsOne = fahrenheightToCels(32)
let celsTwo = fahrenheightToCels(68)
// Print converted value
console.log(celsOne)
console.log(celsTwo)

// SECTION 4:22 - Undefined Null
// Learning
console.log('')
console.log('====== LEARNING AREA ======')

// Undefined Variable
let name 
name = 'Branden'
if (name == undefined){
    console.log('please provide a name')

} else {
    console.log(name)
}

// Undefined for function arguments
// Undfeined as function return def value
let square = function(num){
    console.log(num)
}

let result = square()
console.log(result)
// Null as assigned value
let age = 27
age = null
console.log(age)

// Learning
console.log('SECTION 4:23')
console.log('MULTIPLE ARGUMENTS && ARGUMENT DETAILS')
console.log('==== ==== ==== ==== ==== ==== ==== ====')

let add = function (a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0){
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge
console.log('')
console.log('CHALLENGE AREA')
console.log('==== ==== ==== ==== ==== ==== ==== ====')

// total, tipPercent .2
// subtotal: 10
// tip: 2
// total: 

let getTotal = 
function(subTotal = 0, tip = subTotal * 0.5, total = subTotal + tip){
    return 'Subtotal: ' + subTotal + ' Tip: ' + tip + ' Total: ' + total
}

let totalCheck = getTotal(100)
console.log(totalCheck)

console.log('')

console.log('SECTION 4:24')
console.log('FUNCTION SCOPE')
console.log('==== ==== ==== ==== ==== ==== ==== ====')

let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9
    if (celsius <= 0)
    {
        let isFreezing = true
    }
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(60)

console.log(tempOne)
console.log(tempTwo)

console.log('SECTION 4:25')
console.log('TEMPLATE STRINGS')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
console.log(``)

let getScoreText = function (name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${score}` // template string
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge
console.log('')
console.log('CHALLENGE AREA')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
// A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = .2, tip = total * tipPercent){
    let percent = tipPercent * 100
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(100, .25)
console.log(tip)

// Learning
console.log('SECTION 4:26')
console.log('GRADE CALCULATOR')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
console.log(``)

// Challenge
console.log('')
console.log('CHALLENGE AREA')
console.log('==== ==== ==== ==== ==== ==== ==== ====')

// STUDENTS SCORE, TOTAL POSSIBLE SCORE
// 15/20 -> You got a C(75%)!
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59
let studentScore = function(studentGrade, totalPossibleScore = 100){
    // A
    if (studentGrade >= 90 && studentGrade <= 100){
        let grade = (studentGrade / 100) * 100
        return `${studentGrade}/${totalPossibleScore} -> You got a A(${grade}%)`
    // B
    } else if (studentGrade >= 80 && studentGrade <= 89){
            let grade = (studentGrade / 100) * 100
            return `${studentGrade}/${totalPossibleScore} -> You got a B(${grade}%)`
    // C
    } else if (studentGrade >= 70 && studentGrade <= 79){
            let grade = (studentGrade / 100) * 100
            return `${studentGrade}/${totalPossibleScore} -> You got a C(${grade}%)`
    // D
    } else if (studentGrade >= 60 && studentGrade <= 69){
        let grade = (studentGrade / 100) * 100
        return `${studentGrade}/${totalPossibleScore} -> You got a D(${grade}%)`
    // F
    } else if (studentGrade >= 0 && studentGrade <= 59){
        let grade = (studentGrade / 100) * 100
        return `${studentGrade}/${totalPossibleScore} -> You got a F(${grade}%)`
    } else {

    }
}
let myGrade = studentScore(33)
console.log(myGrade)

console.log('SECTION 4:28')
console.log('OBJECT BASICS')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
console.log(``)

let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// Challenge
console.log('')
console.log('CHALLENGE AREA')
console.log('==== ==== ==== ==== ==== ==== ==== ====')

// person name, age location
let myPerson = {
    name     : 'Ben',
    age      :  77,
    location : 'New England'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)
myPerson.age = myPerson.age + 33
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)