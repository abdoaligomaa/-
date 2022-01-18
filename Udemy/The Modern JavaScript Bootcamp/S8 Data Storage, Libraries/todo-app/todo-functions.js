// to get todoes from storage 
const getTodosFromStrorage=()=>{
    const todoJson=localStorage.getItem('todos')
    try{
        if(todoJson!==null){
            return JSON.parse(todoJson)
        }else{
            return []
        }
    }catch(e){
        return []
    }
    
}

// save todoes to local storage
const saveTodosToStroage=(todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}
// remove todo from browser
const removetodos=(id)=>{
    const todoIndex=todos.findIndex((todo)=>{
        return todo.id===id
    })
    if(todoIndex>-1){
        todos.splice(todoIndex,1)
    }
}

//togle todo
const toglTodo=(id)=>{
    const todo=todos.find((todo)=>{
        return todo.id===id
    })
    if(todo!==undefined){
        todo.completed= !todo.completed
    }
}

// creat dom Element 
const creatTodoEl=(todo)=>{
    const todoEl = document.createElement('div')
    const checkbox =document.createElement('input')
    const todoText =document.createElement('span')
    const removeButton=document.createElement('button')

    // set up the check box
    checkbox.setAttribute('type','checkbox')
    checkbox.checked=todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change',()=>{
        toglTodo(todo.id)
        saveTodosToStroage(todos)
        renderTodos(todos,filters)
    })
    

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
    removeButton.addEventListener('click',()=>{
        removetodos(todo.id)
        saveTodosToStroage(todos)
        renderTodos(todos,filters)
    })

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