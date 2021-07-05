// Create an array with five todos
const todo = [
    '1: Read Bible',
    '2: Study',
    '3: Eat',
    '4: Nap',
    '5: Bills'
]
// Delete the 3rd item
// 1st number is array you want to remove and last number is how many after
todo.splice(2, 1)
// Add new item to the end
todo.push('My new note')
// Remove the first item from the list
todo.splice(0, 1)
let string = `This is the first item on your ${todo[0]} and this is the last item on your todo list ${todo[4]}`
console.log(todo)