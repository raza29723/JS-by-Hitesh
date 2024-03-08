const accountId = 136589;
let accountEmail = "raza@google.com";
var accountPassword = "124587";
accountCity = "Islamabad";
let accountState;

// accountId = 2;  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "15245"
accountCity = "Karachi"

/*
Prefer not to use var 
because of an issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

