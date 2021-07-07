/*
console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})

console.log(index)

*/
const notes = [
    {
        title: 'My next trip',
        body:  'I would like to go to Spain'
    },{
        title: 'Habbits to work on',
        body:  'Excercising and Eating a bit better'
    },{
        title: 'Office modification',
        BODY:  'Get a new seat'
    }
]
/* findINdex
const findNote = function (notes, noteTitle){
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}
*/

const findNote = function (notes, noteTitle){
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'Office Modification')
console.log(note)
