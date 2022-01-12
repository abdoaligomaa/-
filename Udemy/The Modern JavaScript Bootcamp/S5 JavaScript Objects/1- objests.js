// object is a good thing is js , we can store alote of un related data on it ,such as the example below 
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`) // the result is 1984 by George Orwell

myBook.title = 'Animal Farm' // we can change the objct proberty 

console.log(`${myBook.title} by ${myBook.author}`) //the result is 1984 by Animal Farm

// challenge area

let myInfo = {
    name: 'abdo ali',
    age: 21,
    country: 'Egypt',
    city: 'wasta',
    location: `${this.city}:${this.country}`,


}
let result = `my name is ${myInfo.name},my age is ${myInfo.age}, i live in ${myInfo.location}`
console.log(result) //befor change the age
myInfo.age = myInfo.age + 1
console.log(`my name is ${myInfo.name},my age is ${myInfo.age}, i live in ${myInfo.location}`) //after change the age