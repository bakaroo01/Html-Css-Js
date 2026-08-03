// Manipulate an Array with push Method


let myArray = [1, 2, 3];

myArray.push(4);

console.log(myArray); // Output: [1, 2, 3, 4]

// You can also push multiple values at once

myArray.push(5, 6, 7);

console.log(myArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// You can also push values of different types

myArray.push("eight", true, null);

console.log(myArray); // Output: [1, 2, 3, 4, 5, 6, 7, "eight", true, null]


// and by the way push method adds the new elements to the end of the array 
// and returns the new length of the array.