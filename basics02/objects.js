// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rishu",
    "full name": "Amardeep Verma",
    [mySym]: "mykey1",
    age: 21,
    location: "Chandigarh",
    email: "rishu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greetingThree = function(){
console.log(`Your current location is = ${this.location}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greetingThree())