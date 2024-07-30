const number= 22  // Always declare a variable with const when you know that the value should not be changed.
console.log(number);

let a = "Shubham"
console.log(a);

//or
let b = "yes we are"
 function f() {
   let b = "King of all Times ";
   console.log(b);
}
//console.log(b);
f();// These variables has the block scope . It can't be accessible outside the particular code block
console.log(b);

// Prefer not to use "var" because of issue in block scope and functional scope