// getting the saved notes from the local storage
console.log(uuidv4())
const getNotesFromStorage=()=>{

    const notesJson=localStorage.getItem('notes')
    if(notesJson!==null){
      return  JSON.parse(notesJson)
    }else{
        return []
    }
}

//save note to local storage 
const saveNotesToStrorage=(notes)=>{
    localStorage.setItem('notes',JSON.stringify(notes))
}

// creat note dom in the browser to show notes 
const creatNoteDom=(note)=>{
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const buttonEl = document.createElement('button')

    // set up the remove button element 
    buttonEl.textContent='x'
    noteEl.appendChild(buttonEl)

    // set up the text note element 
    if(note.title.length>0){
        textEl.textContent = note.title
    }else{
        textEl.textContent = 'no title note'
    }
    noteEl.appendChild(textEl)


        return noteEl
}

//rendering note
const renderNotes =  (notes, filters)=>{
    const filteredNotes = notes.filter( (note)=> {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // to remove the oldest notes to render new notes
    document.querySelector('#my_notes').innerHTML = ''
    
    filteredNotes.forEach( (note)=> {
        const noteEl=creatNoteDom(note)
        document.querySelector('#my_notes').appendChild(noteEl)
    })
}