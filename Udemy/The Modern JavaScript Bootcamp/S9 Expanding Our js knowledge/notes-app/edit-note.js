const noteId=location.hash.substring(1)
const TitleEl=document.querySelector('#note-title')
const bodyEl=document.querySelector('#note-body')
const removeButton=document.querySelector('#remove-note')
const date=document.querySelector('#last-Edited')

let notes=getNotesFromStorage()
let note=notes.find((note)=>{
    return note.id===noteId
})

if(note===undefined){
    location.assign('/index.html')
}

TitleEl.value=note.title
bodyEl.value=note.body
date.textContent=genterateLastEdite(note.updatedAt)


TitleEl.addEventListener('input',(e)=>{
    note.title=e.target.value
    note.updatedAt=moment().valueOf()
    date.textContent=genterateLastEdite(note.updatedAt)
    saveNotesToStrorage(notes)
})

bodyEl.addEventListener('input',(e)=>{
    note.body=e.target.value
    note.updatedAt=moment().valueOf()
    date.textContent=genterateLastEdite(note.updatedAt)
    saveNotesToStrorage(notes)
})
removeButton.addEventListener('click',(e)=>{
    removeNote(note.id)
    saveNotesToStrorage()
    location.assign('/index.html')
})
//هذا الكود لعمل مذامنه بين الصفحات والتغييرات ف اكثر من صفحه 
window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){
         notes=JSON.parse(e.newValue)
         note=notes.find((note)=>{
            return note.id===noteId
        })
        
        if(note===undefined){
            location.assign('/index.html')
        }
        TitleEl.value=note.title
        bodyEl.value=note.body
        date.textContent=genterateLastEdite(note.updatedAt)
        

    }
})