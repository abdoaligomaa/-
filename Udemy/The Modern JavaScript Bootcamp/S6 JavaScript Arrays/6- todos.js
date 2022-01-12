// search challenge

// make an array of objects
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// make a delete funtion to delete todo by text.

const deleteTodo = function(todos, todoText) {
        const index = todos.findIndex(function(todo) {
            return todo.text === todoText
        })

        if (index > -1) {
            todos.splice(index, 1)
        }
    }

        deleteTodo(todos, 'Do work') // we will delete the fourth todo , index(3)
        console.log(todos)

        // end of challenge 