//you can put one or more argument in your function as you need this fuction to do
// Multiple arguments
let add = function(a, b, c) {
    return a + b + c // this function will return the sum of the tree arguments a,b,c
}

let result = add(10, 1, 5)
console.log(result) // the result is 16

// Deafult arguments
let getScoreText = function(name = 'Anonymous', score = 0) { // this is an initial values for those arguments 
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText) // the result is `Name: undefined - Score: 99

// challenge area
let getTip = function(total, tipPresent) {
    let result = total * tipPresent
    return result
}
let theTip = getTip(100, .1)
console.log(theTip) // the result will be 10.