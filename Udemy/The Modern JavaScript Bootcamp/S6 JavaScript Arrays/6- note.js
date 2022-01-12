// searshing in the array of objects

// array of object 
const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]
let findNote = function(notes, nodeTitle) {
    let index = notes.findIndex(function(note) {
        return note.title === nodeTitle
    })
    return notes[index]
}
console.log(findNote(notes, 'my next trip')) // it will return the note number 0