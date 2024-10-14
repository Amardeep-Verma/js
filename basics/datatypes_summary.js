// Primitive (call by value)

/*
  7 types : String , Number , Boolean , null (empty not 0) , undefined , Symbol , BigInt 
*/

/*
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); // false 

const bigNumber = 28896878728n
console.log(typeof bigNumber);




  // Reference (Not primitive)
  
  Arrays , Objects , Functions



const heroes = ["shaktiman" , "nagraj", "krish"] // array

let myObj = {
  name:"hitesh",
  age:  22
}
console.log(myObj);

const myFunction =  function(){
  console.log("Hello world");
  
}
console.log(myFunction);

console.log(typeof myFunction);

*/
// Stack (used in primtive datatypes)

// Heaps (used in non - p datatypes)

/*
//datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
*/

let myName = "amardeep"
let anothername = myName
anothername = "rishu"

console.log(myName);
console.log(anothername);

let user1 = {
  email : "xyz@gmail.com",
  upi:"user@ibl"
}

let user2 = user1
user2.email = "abc@gmail.com"

console.log(user1.email); 
console.log(user2.email); 


let myname = "Amardeep"; //primitive type stored in stack 
let nickname = myname; // A copy of the value is created in the Stack 
nickname = "Rishu"; // Now changing the copy does not affect the original value .

console.log(myName); // output => Amardeep (Original values remains unchanged since we are using stack)
console.log(nickname); // output => rishu (only the copied value will changed)


