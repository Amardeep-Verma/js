console.log("2" >1);
console.log(null > 0);
console.log(null == 0);
console.log(null >=0);
console.log(null <= 0);

/*
console.log("2" > 1);

JavaScript tries to convert "2" (a string) into a number before comparing.
"2" becomes 2, and 2 > 1 is true.
Output: true
console.log(null > 0);

null is considered as 0 when compared using relational operators (<, >, <=, >=).
Thus, null > 0 is false.
Output: false
console.log(null == 0);

When comparing with ==, JavaScript does not convert null to a number. Instead, null is only equal to undefined and nothing else.
Thus, null == 0 is false.
Output: false
console.log(null >= 0);

In this case, null is converted to 0 for the relational comparison.
0 >= 0 is true.
Output: true
console.log(null <= 0);

Similarly, null is converted to 0 for this comparison.
0 <= 0 is true.
Output: true
*/


console.log(undefined == 0); //false
console.log(undefined == null); //true
console.log(undefined >0);
// we should avoid these types of comparison
