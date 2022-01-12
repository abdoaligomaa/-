let num = 103.941

console.log(num.toFixed(2)) // toFixed () make the num 103.94

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    // make a random numbers (0,1)

// Challenge area
// 1 - 5 - true if correct - false if not correct
let gess = function(n) {
    let min = 1
    let max = 5
    let result = Math.floor(Math.random(max - min + 1) + min)
    return result === n
}
console.log(gess(2))
    // end of the challenge.