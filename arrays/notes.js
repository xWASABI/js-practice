const notes = [
    'Note 1', 
    'Note 2',
    'Note 3'
]
// Method call - Remove last item
// console.log(notes.pop())
// Method call - Add
// notes.push('My new note')
// Removes the first item of an array
// console.log(notes.shift())
// Add item at the start
// notes.unshift('My first note')
// Splice remove item in middle of array
// notes.splice(1, 1)
// Splice add item in middle of array
// notes.splice(1, 0, 'This is the new item')
// Splice replace item in array
// notes.splice(1, 1, 'This is the new item')
// notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

// Counting.. 1
for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = notes.length -1; count >= 0; count--){
    console.log(notes[count])

}