// Manipulating Array with pop method

let myArray = [1, 2, 3, 4, 5];

let removedElement = myArray.pop();
console.log(myArray); // Output: [1, 2, 3, 4]
console.log(removedElement); // Output: 5

// You can also pop multiple elements by calling the pop method multiple times

let anotherRemovedElement = myArray.pop();
console.log(myArray); // Output: [1, 2, 3]
console.log(anotherRemovedElement); // Output: 4

// pop method removes the last element from an array and returns that element.  