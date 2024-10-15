// objects are variables too . But objects can contain many values.

const car = {type:"Fiat", model : "500", color: "white"}

/* we can define objects in three ways
 1. using an object literal 
 2. using the new keyword
 3. using an object constructor 

 1. Using an object literal 
 an object literal is a list of name: value pairs inside curly braces.
const person = {
  firstName:"John",
  lastName:"Doe",
  age : 40,
  eyeColor:"blue"
};

*/
// 2. using the new keyword
// this creates a new js object using new Object(), and then adds 4 properties

const person2 = new Object();
// adding properties
person2.firstName= "Rishu";
person2.lastName="Verma";
person2.age = 20;
person2.eyeColor="black";

//console.log(person2);
//console.log(person2.eyeColor);


// accessing object properties

// objectName.propertyName
// objectName["propertyName"]

//console.log(person.lastName);
//console.log(person2["lastName"]);


// Javascript Object Methods
// Methods are action performed on objects.
// methods are function  definitions stored as property values

const person4 = {
  firstName:"Harsh",
  lastName : "Sharma",
  id: 2092,
  fullName : function(){
    return this.firstName+" "+ this.lastName; // this refers to the person object 
  }
}
console.log(person4.fullName()); // dont forget to use paranthesis after function name 



/* Javascipt Objects are Mutable 
  Objects are mutable : They are addressed by reference , not by value .
  If person is an object , the following statement will not create a copy of person 
  const x = person ;

  The object x is not a copy of person . The object x is person .
  The object x and the object person share the same memory address.
  Any changes to x will also change person :


const person  = {
  firstName: "John",
  lastName: "Doe",
  age : 50,
  eyeColor:"blue"
}

const x = person; // creates a copy

// change age in both 
x.age= 18 ;
console.log(x.age);
console.log(person.age); // therefore js is mutable




  ####Accessing Js properties
  there are 3 ways to access

  1. let age = person.age;
  2. let age = person["age"];
  3. let age = person[x];

  person.firstname + "is " + person.age + " years old.";

  person["firstname"]+ " is "+ person["age"] + " years old.";

  let x =" firstname";
  let y = "age";
  person[x]+ " is "+ person[y]+" years old"


  ## Adding new properties
  person.nationality= "English";

  ### Deleting properties
  we use delete keyword


*/

const persondelete = {
  firstName : "Raj",
  lastName : "Mehra",
  age : 30 ,

};

delete persondelete.age;
console.log(persondelete)
// or delete persondelete["age"]
