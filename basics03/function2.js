// suppose we are adding items in cart on an ecommerce site we dont know how many items will come then we use rest parameters it wraps all the items in array . syntax is (...)

function addToCart(num1){
  return num1
}
 // now if we pass more than one value it will only show the first value

 console.log(addToCart(2,3,4,5)) // here 3,4,5 will not logged in console only 2 will be printed 

 // to tackle this we use rest parameter 

function addToCart2(...test){
  return test
}

console.log(addToCart2(2,5,31,345,355)) // now it will show all the data in array form

function addToCart3(value1, value2 ,...test){
  return test
}

console.log(addToCart3(4,21,45,245,50))   // here 4 is sent to value 1 , 21 is sent to value2 and the remaining in the test 



// passing objects in function 

const user = {
  username:"Rishu",
  age:19
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and age is${anyobject.age}`)
}

// handleObject(user)

handleObject({
  username:"sam",
  price:399
})


// passing array in function
const myNewArray = [200,300,100,600]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));
