const user = {
  username :"rishu",
  age:19,

  welcomeMessage: function(){
    console.log(`${this.username} , Welcome to website`);
    console.log(this);
    
  }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function one(){
//   let username = "Hitesh"
//   console.log(this.username) // undefined
// }

// one()


// const chai = function(){
//   let username = "Raj"
//   console.log(this.username);
// }

const chai = () => {
  let username = "Raj"
  console.log(this);
}
// chai()




 // Arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,5))


// IMPLICIT RETURN 
// const addTwo = (num1+num2) => num1 + num2
// const addTwo = (num1+num2) => (num1 + num2)