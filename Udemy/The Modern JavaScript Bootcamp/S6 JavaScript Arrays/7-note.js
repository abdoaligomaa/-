// filter function

const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat '
}]

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleRight = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyRight = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleRight || isBodyRight
    })
}

// now i will fulter the query from the notes

console.log(findNotes(notes, 'next')) // the result will be >>  title: 'my next trip',
    //body: 'I would like to go to Spain'