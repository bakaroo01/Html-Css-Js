// Manipulating an array with the shift method

let myArray = [1, 2, 3, 4, 5];

let removedElement = myArray.shift();
console.log(myArray); // Output: [2, 3, 4, 5]
console.log(removedElement); // Output: 1

// You can also shift multiple elements by calling the shift method multiple times

let anotherRemovedElement = myArray.shift();
console.log(myArray); // Output: [3, 4, 5]
console.log(anotherRemovedElement); // Output: 2

// shift method removes the first element from an array and returns that element.

