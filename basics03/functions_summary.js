function myFunction(p1,p2){
  return p1*p2;
}

console.log(myFunction(4,3))
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

/* #### FUNCTION INVOCATION
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked) */


// THE () operator
// the () opertor invokes / calls the function


function toCelsius(fahrenheit){
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(88)
// let value = toCelsius()  Accessing a function without () returns the function and not the function result:




