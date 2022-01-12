// this function is to make the code very simple and small 

let greetUser = function() {
        console.log('Welcome user!')
    }
    // now i will call this function 3 times
greetUser() // (Welcome user!) will show in the console 
greetUser() // (Welcome user!) will show in the console
greetUser() // (Welcome user!) will show in the console

// now the function below is to take a number and return the square 
let square = function(num) {
    let result = num * num
    return result
}
let x = 3
let y = 10
let squ = square(x)
let squa = square(y)
console.log(squ) //the result will be 9
console.log(squa) //the result will be 100

// challenge area
let convertFahr_cels = function(fahr) {
    let celsius = (fahr - 32) * 5 / 9
    return celsius
}

let tempOne = convertFahr_cels(32)
let tempTwo = convertFahr_cels(68)

console.log(tempOne)
console.log(tempTwo)