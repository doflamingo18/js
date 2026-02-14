const accountId = 144567
let accountEmail = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId= 234567 is not allowed as it is assigned with const keyword, and putting ; at the end of line is not important you can also not us it as it doesnot affect the js as in other langauges

accountEmail="star@yahoo.com"
accountPassword= "45678"
accountCity="Hamirpur"


/* 
preffer not to use var 
because of issue in block scope and functional scope

*/

console.log(accountId)
console.log(accountCity)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
