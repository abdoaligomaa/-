// sort function

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
const sortNotes = function(notes) {
     return notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1 // it will return the first argument
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1 // it will return the second  argument
        } else {
            return 0  // will not do any thing 
        }
    })
}
console.log(sortNotes(notes))