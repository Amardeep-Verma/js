function sayMyName(){
  console.log("R");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("U");
  
}
// sayMyName()

// function addTwoNumbers(number1, number2){
  
//   console.log( number1+number2);
// }

function addTwoNumbers(number1,number2){
  let result = number1 + number2
  //return result
  return number1+number2
  console.log("Rishu"); // after the return keyword nothing will get executed
}

addTwoNumbers() //  will return NaN 
addTwoNumbers(3,2)
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const result = addTwoNumbers(4,3)
//console.log("Result : " , result);


function loginUserMessage(username){
  if(username === undefined){
    console.log("Please enter your username");
    return 
  }
  return `${username} just logged in `
}

console.log(loginUserMessage("Rishu"));
console.log(loginUserMessage()); // undefined just logged in 



