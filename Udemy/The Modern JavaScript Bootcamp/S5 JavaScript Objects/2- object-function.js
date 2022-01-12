let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = { // this an other example of object 
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) { // passing an object to function 
    // we can use this insted of the return below 
    //  `${book.title} by ${book.author}is ${book.pageCount} pages long`
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook) //passing an mybook to function
let otherBookSummary = getSummary(otherBook) //passing an otherBook to function

console.log(bookSummary.pageCountSummary) // the result is 326


// challenge area


let convertFah_sel_kel = function(fahr) {
    return {
        fahrenheit: fahr,
        kelvin: (fahr + 459.67) * (5 / 9),
        celsius: (fahr - 32) * (5 / 9)
    }
}

let temps = convertFah_sel_kel(74)
console.log(temps) //print all temps
console.log(temps.kelvin) //print kelvin
console.log(temps.fahrenheit) //print fahrenheit
console.log(temps.celsius) //print celsius
    //end of the challenge.