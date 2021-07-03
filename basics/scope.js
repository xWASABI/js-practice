// Lesson
// JS uses Lexical Scope (Static Scope)
// {} = Code block
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access the variables defined in that scop, or any 
// parent/ancestor scope

// Global Scope (varOne)
let varOne = 'varOne'

if (true){
    console.log(varOne)
    // Local Scope (varTwo)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true){
        // Local Scope (varFour)
        let varFour = 'varFour'
    }
}

if (true){
    // Local Scope (varThree)
    let varThree = 'varThree'

    if (true){
        let varFour = 'varFour'
    }
}




console.log(varTwo)
