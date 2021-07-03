// Object
let myBook = {
    // Properties
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

// Object
let otherBook = {
    // Properties
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

// Pass object to a function
let getSummary = function (book){

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook)
let otherSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)

// Challenge
console.log('')
console.log('## Challenge')

// Create function - take fahrenheit in - return object with all three

let getTemps = function (fahrenheit){
    return {
        f: fahrenheit,
        c: (fahrenheit - 32) * 5 / 9,
        k: (fahrenheit + 459.67) * 5 / 9 
    }
}

let temps = getTemps(74)
console.log(temps)