const accountId = 134423
let accountEmail = "rishu@google.com"
var accountPassword = "12345"
accountCity= "Jaipur"   // we can declare variables like these but we should never use this 
let accountState; // this will give undefined in output , if we only declare variable without giving its value it shows undefined


// const -- values cant be changed

//  accountId = 2    not allowed due to const keyword used above  

console.log(accountId);
accountEmail= "xyz@gmail.com"
accountPassword="2345"
accountCity="Chandigarh"


console.table([accountEmail,accountPassword,accountCity])


// we can define constant only using const keyword but we can define variables by using var and let (difference is of scope) 

//const = can't be re-assigned a value and can't be declared again  (block scope)
//let = can be re-assigned a value but can't be declared again (block scope)
//var = it can be re-assigned a value and it can also be declared again  (Global scope)
//=> Never use var in your code instead of let because of block and functional scope issues.
//# console.table([group of variables you want to show in tabular form])