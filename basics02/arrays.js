const myArr = [0,1,2,3,4,5,true,"rishu"]
const mHeroes = ["thor","hawkeye"]

const myArr2 = new Array(2,34,5,2,true,"Hello")
// console.log(myArr[6]);
// console.log(myArr2.length);


// Array methods

const arrMethods = []
arrMethods.push("hello")
arrMethods.push(2)
arrMethods.push(true)
arrMethods.pop() // blank pop method will remove the last element

arrMethods.unshift(4) // places the element in 0th index 
arrMethods.shift() //shift method takes no argument it removes the 0th index element
console.log(arrMethods);


const myArr3=[]
myArr3.push(4)

console.log(myArr3);
myArr3.shift()


mynewArr = [1,5,35,24,8,20]
console.log(mynewArr.includes(2));
console.log(mynewArr.indexOf(8));


const mynewArr2 = mynewArr.join()
console.log(mynewArr);

console.log(mynewArr2)
console.log(typeof mynewArr2);


// Slice and splice 

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

// Here in splice method the we are printing from index 1 to 3 index 1 will be included but 3 will not be included and the slice method do not manipulate the array , the array stills remains the same 


console.log("A ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("B ",myArr);

// splice method included both starting and ending elements and it manipulated the array 