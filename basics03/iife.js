/* Immediately Invoked Function Expression (IIFE)

An IIFE(Immediately Invoked Function Expression) is a Js Function that runs as soon as it is defined.

(function (){
  // ... 
}) ();

(() => { 
  // ... 
  }) ();   


(async ()=> {
  //...
  }) (); 

  NOTE : if we are using more than one IIFE then we have to use semicolon after the function otherwise it will throw error 


  It is a design pattern which is also known as a Self- Executing Annonymous Function and contain two major parts:

  1. The first is the anonymous function with lexical scope enclosed within the grouping operator() . This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

  2. The second part creates the immediately invoked function expression () through which the JS engine will directly interpret the function .

  USE CASES OF IIFE
  - Avoid polluting the global namespace.
  - To create closures in JS 
  - IIFE is used to create private and public variables and methods
  - It is used to execute the async and await function 
  - It is used to work with require function .
*/















// Named IIFE
(function fun(){
  console.log(`DB CONNECTED`)
})(); 



( () => { 
  console.log(`DB CONNECTED TWO`)
})();


// ( (name) ) => {
//   console.log(`DB connected to ${name}`);
// })('Rishu')

( (name) => { 
  console.log(`DB CONNECTED TWO ${name}`)
})(rishu);