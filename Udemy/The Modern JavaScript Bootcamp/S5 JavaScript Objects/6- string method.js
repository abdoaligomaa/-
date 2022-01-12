// string has alot of methods , i can search for it in mdn
let myName = '  abdo ali '

// Length property
console.log(myName.length) // the length of the string 

// Convert to upper case
console.log(myName.toUpperCase()) // return the string  capital 

// Convert to lower case
console.log(myName.toLowerCase()) // return the string  small 

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('abc')) //return true because abc is in the password string 

// Trim
console.log(myName.trim()) // remove the white spaces after and before the string

// Challenge area

// isValid
let isValid = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValid('asdfp')) // return false 
console.log(isValid('abc123!@#$%^&')) // return false 
console.log(isValid('asdfpasdfpoijpassword')) // return true