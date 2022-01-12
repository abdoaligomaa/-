const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1) // remove the third element of the array 

todos.push('this is first item') // add 'this is first item to the end of the array 

todos.shift() // remove the first item

// the start of the challenge
for (let i = 0; i < todos.length; i++) {
    console.log(`${i+1}- ${todos[i]}`)
})

// the and of the challenge