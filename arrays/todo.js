// 1. Convert array to array of objects -> text and completed
const todo = [
    {
        text: 'Read Bible',
        completed: 1
    },
    {
        text: 'Study',
        completed: 0
    },
    {
        text: 'Eat',
        completed: 1
    },
    {
        text: 'Nap',
        completed: 0
    },
    {
        text: 'Bills',
        completed: 1
    }
]
// 2. Create function to remove a todo by a text value
const deleteTodo = function (todo, todoTitle){
    return todo.find(function (todos, index){
        return todos.text.toLowerCase() === todoTitle.toLowerCase()
    }))
}

deleteTodo(todo, 'study')
console.log(todo)