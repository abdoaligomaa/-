// to get todoes from storage 
const getTodosFromStrorage=()=>{
    const todoJson=localStorage.getItem('todos')
    if(todoJson!==null){
        return JSON.parse(todoJson)
    }else{
        return []
    }
}

// save todoes to local storage
const saveTodosToStroage=(todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}

// creat dom Element 
const creatTodoEl=(todo)=>{
    const todoEl = document.createElement('div')
    const checkbox =document.createElement('input')
    const todoText =document.createElement('span')
    const removeButton=document.createElement('button')

    // set up the check box
    checkbox.setAttribute('type','checkbox')
    todoEl.appendChild(checkbox)

    // set up the text element of todo
    if(todo.text.length>0){
        todoText.textContent = todo.text
    }else{
        todoText.textContent = 'empity to do'
    }
    todoEl.appendChild(todoText)

    // set up the remove button 
    removeButton.textContent='x'
    todoEl.appendChild(removeButton)

        return todoEl
}

// creat dom Element for samary 
const creatTodosamaryEl=(incompleteTodos)=>{
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

// rendering todos
const renderTodos =  (todos, filters)=> {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter( (todo)=> {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
     
    const sammary=creatTodosamaryEl(incompleteTodos)
    document.querySelector('#todos').appendChild(sammary)

    filteredTodos.forEach(function (todo) {
        const todoEl=creatTodoEl(todo)
        document.querySelector('#todos').appendChild(todoEl)
    })
}