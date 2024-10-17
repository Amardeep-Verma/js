function one(){
  const username = "rishu"

  function two(){
    const website = "youtube"
    console.log(username);
  }
 // console.log(website);
  two() 
}
one()



if(true){
  const username = "Rishu"
  if(username === "Rishu"){
    const website = "youtube"
    console.log(username + website);
  }
  // console.log(website) // this will give error because we are out of the scope 
}
// console.log(username)  same error will be thrown here


// +++++ interesting +++++

function addone(num){
  return num + 1
}

addone(5)


const addTwo = function(num){
  return num + 2
} 
addTwo(5)
