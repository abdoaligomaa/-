// getting the saved notes from the local storage
// console.log(uuidv4())


const getNotesFromStorage=()=>{

    const notesJson=localStorage.getItem('notes')
    try{
        if(notesJson!==null){
            return  JSON.parse(notesJson)
          }else{
              return []
          }
    }catch(e){
        return []
    }
    
}

//save note to local storage 
const saveNotesToStrorage=(notes)=>{
    localStorage.setItem('notes',JSON.stringify(notes))
}

// remove note from browser
const removeNote=(id)=>{
    const noteIndex=notes.findIndex((note)=>{
        return note.id===id
    })
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
}

// creat note dom in the browser to show notes 
const creatNoteDom=(note)=>{
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const buttonEl = document.createElement('button')

    // set up the remove button element 
    buttonEl.textContent='x'
    noteEl.appendChild(buttonEl)
    buttonEl.addEventListener('click',()=>{
        removeNote(note.id)
        saveNotesToStrorage(notes)
        renderNotes(notes,filters)
    })

    // set up the text note element 
    if(note.title.length>0){
        textEl.textContent = note.title
    }else{
        textEl.textContent = 'no title note'
    }
    textEl.setAttribute('href',`/note.html#${note.id}`)
    noteEl.appendChild(textEl)


        return noteEl
}

// sorting the notes
const sortNotes=(notes,sortby)=>{
    if(sortby==='byEdited'){
        return notes.sort((a,b)=>{
            if(a.updatedAt>b.updatedAt){
                return -1
            }else if(a.updatedAt<b.updatedAt){
                return 1
            }else{
                return 0
            }
        })
    }else if(sortby==='byCreated'){
        return notes.sort((a,b)=>{
            if(a.createdAt<b.createdAt){
                return -1
            }else if(a.createdAt>b.createdAt){
                return 1
            }else{
                return 0
            }
        })
    }else if(sortby==='alphabetical'){
        return notes.sort((a,b)=>{
            if(a.title.toLowerCase()<b.title.toLowerCase()){
                return -1
            }else if(a.title.toLowerCase()>b.title.toLowerCase()){
                return 1
            }else{
                return 0
            }
        })
    }
    return notes

}

//rendering note
const renderNotes = (notes, filters)=>{
    notes=sortNotes(notes,filters.sortBy)
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
//هذا الكود لعمل مذامنه بين الصفحات والتغييرات ف اكثر من صفحه 
window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){
         notes=JSON.parse(e.newValue)
    }
    renderNotes(notes,filters)
         
})

const genterateLastEdite=(time)=>{
    return `this note last edited ${moment(time).fromNow()}`
}