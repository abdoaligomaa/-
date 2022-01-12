const notes = [{
    title: 'learn java script ',
    body: 'I will learn from androw mead course on udemy '
}, {
    title: 'learn react js  ',
    body: 'I will learn from androw mead course on udemy '
}, {
    title: 'learn node js  ',
    body: 'I will learn from androw mead course on udemy '
}]

const filters = {
    searchText: ''
}
// this function will render notes on the dev on my web site
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // to remove the oldest notes to render new notes
    document.querySelector('#my_notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#my_notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'this button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})