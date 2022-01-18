let notes =getNotesFromStorage()

const filters = {
    searchText: '',
    sortBy:'byEdited',
}




renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id=uuidv4()
    const time=moment()
    notes.push({
        id:id,
        title:'',
        body:'',
        createdAt:time.valueOf(),
        updatedAt:time.valueOf()
    })
    saveNotesToStrorage(notes)
    // renderNotes(notes,filters)
    location.assign(`note.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',(e)=> {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change',(e)=> {
    filters.sortBy=e.target.value
    renderNotes(notes,filters)
})

