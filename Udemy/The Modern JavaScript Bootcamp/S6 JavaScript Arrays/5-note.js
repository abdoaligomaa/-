// indexof function >> is to find the index of the item in the array 
// array of objects
// findIndex  function>>> take an argument funtion and find the index of the item in the array 


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
let index = notes.findIndex(function(item) {
    return item.title === 'Habbits to work on'
})
console.log(index) // the result will be 1