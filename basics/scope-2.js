// Global
// Local
// Local
// Local

// let name = 'Branden'

if (true){
    // Variable shadowing
    // let name = 'Mike'
    if (true){
        // Leak Global when not defined above as 'let'
        name = 'Jenn'
        console.log(name)
    }
}

if (true){
    console.log(name)

}