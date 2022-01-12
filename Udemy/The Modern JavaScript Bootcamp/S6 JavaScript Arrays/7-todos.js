// challenge for filter 


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

// the function below will fitlter the completed false 

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        return todo.completed === false
    })
}
console.log(getThingsToDo(todos))
    // the end of the challenge