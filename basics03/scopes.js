/*
Scope determines the accessibility / visiblity of variables

Js variables has 3 types of scope:
1.Block scope
2.Function scope
3.Global scope 
*/

// #### BLOCK SCOPE
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

// Variables declared inside a { } block cannot be accessed from outside the block:

{
  let x = 2;  
}
// x cant be used here

// Variables declared with the var keyword can NOT have block scope.

{
  var x = 4;
}
// x can be used here
// console.log(x);


//##### LOCAL SCOPE

// Variables declared within a js function , are LOCAL to the function



// code here can NOT use carName
function myFunction(){
  let carName = "Audi";
  // code here CAN use carName
}

// code here can NOT use carName
// LOCAL varibles have Function scope : They can only be accessed from within the function 

// Local variables are created when a function starts, and deleted when the function is completed.


function myFunction2(){
  var carName = "BMW"; // function scope
}

function myFunction3(){
  let carName = "Mercedes"; // function scope
}

function myFunction4(){
  const carName = "Ferrari";// function scope
}

//All the above have function scope 


// ##### GLOBAL JS VARIABLES
// A variable  declared outside a function , becomes GLOBAL

let carName = "Audi";
// code here can use carName

function myFunction5(){
  // code here can also use carName
}

// A global variables has Global scope . All scripts and functions on a web page can access it .



// #### AUTOMATICALLY GLOBAL 
// If you assign a value to a variable that has not been declared , it will automatically become a GLOBAL variable.

myFunction6();
// code here can use carName

function myFunction6(){
  carName = "Audi";
}


// #### STRICT MODE
// All modern browser support running js in "Strict mode"

// In strict mode , undeclared variables are not automatically global



/* ### WARNING
Do NOT create global variables unless you intend to.

Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.

*/