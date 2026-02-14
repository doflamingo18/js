let score ="33"

//console.log(typeof score)

let valueInNumber= Number(score)
//console.log(typeof valueInNumber)

// "33abc" => NaN
// "33" => 33
// "abc" => NaN
// True => 1
// False => 0

let isLoggedIn = "true"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1=> true
// 0 => false
// "" => false
// " " => true
// "false" => true

let someNumber = 3
let stringNumber = String(someNumber)
console.log(stringNumber, typeof stringNumber)