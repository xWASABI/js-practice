// === - Equality Operator
// !== - Not Equal operator
// >, <, >=, <= - Works as well
// Logical AND Operator && - both sides are true
// Logical OR Operator || - either side is true
// { CODE BLOCK }

// Learning
console.log('SECTION 4:29')
console.log('OBJECT BASICS')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
console.log(``)

let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge
console.log('')
console.log('CHALLENGE AREA')
console.log('==== ==== ==== ==== ==== ==== ==== ====')













































console.log('')