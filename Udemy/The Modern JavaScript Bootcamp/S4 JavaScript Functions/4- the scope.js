// the funcion scope is the same as any scope if we make a local scope in funcion we can not use it in the global scope.
let convertFahr_cels = function(fahr) {
    let celsius = (fahr - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahr_cels(32)
let tempTwo = convertFahr_cels(68)

console.log(tempOne)
console.log(tempTwo)