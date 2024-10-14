const name = "hitesh "
const repoCount = 50 

//console.log(name + repoCount + " value ");

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);  // string interpolation 

const gameName = new String(`Rishu `)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // 6 
// console.log(gameName.toUpperCase());  // RISHU   this will not change the original string as we know about Stack property 
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4) // rish will be printed last index will not be printed
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "    rishu   "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes extra spaces from both start and end 


const newStr1 = "     hello     "
console.log(newStr1.trimEnd());
console.log(newStr1.trimRight());

console.log(newStr1.trimStart());
console.log(newStr1.trimLeft());

const url = "https://rishu.com/rishu%20verma"
console.log(url.replace('%20','-'));



// IMPORTANT STRING METHODS 

// 1. string.indexOF()

let google = "Java and Javascript are not same";
console.log(google.indexOf('e'));
console.log(google.indexOf('Javascript'))


// 2 . string.replace(originalstr,newstr)
let text = "Java and Javascript are not same";
console.log(text.replace("Javascript","Ecmascript"));
console.log(text.replace(/Java/g,"AngularJs")); // global search modifier 

let text2 = "Java is versatile . Java is popular"
console.log(text.replace("Java","ReactJS")); // converts only the first match 
console.log(text.replace(/Java/g,"ReactJS")); // converts all the matchs found


