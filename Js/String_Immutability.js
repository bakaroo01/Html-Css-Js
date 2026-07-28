// String is immutable in JavaScript,

// which means that once a string is created, it cannot be changed.

//  Any operation that appears to modify a string actually creates a new string.


// Example of string immutability

let originalString = "Hello, World!";
let modifiedString = originalString.toUpperCase();
console.log(originalString); // Output: "Hello, World!"
console.log(modifiedString); // Output: "HELLO, WORLD!"

// Attempting to change a character in the string

let anotherString = "Hello";
anotherString[0] = "h";
console.log(anotherString); // Output: "Hello" (the string remains unchanged)