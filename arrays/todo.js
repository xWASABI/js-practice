// Create an array with five todos
const todo = [
    'Read Bible',
    'Study',
    'Eat',
    'Nap',
    'Bills'
]
// Delete the 3rd item
// 1st number is array you want to remove and last number is how many after
todo.splice(2, 1)
// Add new item to the end
todo.push('My new note')
// Remove the first item from the list
todo.splice(0, 1)
let string = `You have ${todo.length} items remaining!`
console.log(string)
// first item
// second item
todo.forEach(function(item, index){
    let num = index + 1
    console.log(`${num}. ${item}`)
})
console.log('')

for (let count = 0; count < todo.length; count++) {
    console.log(todo[count])
}