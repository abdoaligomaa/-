// the array is a collection of item , and it is zero psssed array 


const note = ['note1', 'note2', 'note3']
note.push('note4') // add note4 to note array in the last

console.log(note) // the result will be  ['note1', 'note2', 'note3',note4]
note.pop() // this function will remove the last item

note.shift() // this function will remove the first item
note.unshift('this is first note') // this function will add  the first item
console.log(note)

//note: you can use splice function to add and remove from the array 
// note .splice(1,1) iam in the item 1 and should remove 1 item 

// note .splice(1,0) iam in the item 1 and did not do any thing
// note .splice(1,0,'new item') make 'new item ' the second item and shift all item after it 

// note .splice(1,1,'new item') remove the item number 1 and put 'new item ' instead of its