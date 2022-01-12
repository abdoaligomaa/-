// this is challenge area
// make a grade calcultor
let gradeCalcoltor = function(total, myScore) {
    let gradePresent = (myScore / total) * 100
    let myLetter = ''
    if (gradePresent >= 90) {
        myLetter = 'A'
    } else if (gradePresent >= 80) {
        myLetter = 'B'
    } else if (gradePresent >= 70) {
        myLetter = 'C'
    } else if (gradePresent >= 60) {
        myLetter = 'D'
    } else {
        myLetter = 'F'
    }
    return `my grade present is ${gradePresent} and my Letter is ${(myLetter)}`


}
let result = gradeCalcoltor(100, 90)
console.log(result)
    // the final of the result