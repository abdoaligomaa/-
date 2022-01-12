// challenge for sorting 

let todos = [{
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
    // sort the todos array alphapitcly 
let sortTodos = function(todos) {
     return todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1 // the a will come first 
        } else if (!b.completed && a.completed) {
            return 1 // b will come first 
        } else {
            return 0
        }
    })
}
console.log(sortTodos(todos))