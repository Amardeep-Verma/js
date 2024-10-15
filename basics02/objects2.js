//const tinderUser = new Object()      // this is a singleton object
const tinderUser={} // this is a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
  email : "xyz@gmail.com",
  fullname: {
    userfullname :{
      firstname : "Rishu",
      lastname : "Verma"
    }
  }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);


const users = [
  {
    id:1,
    email:"rishu@gmail.com"
  },
  {
    id:2,
    email:"xyz@gmail.com"
  }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)) // will return an array datatype
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
