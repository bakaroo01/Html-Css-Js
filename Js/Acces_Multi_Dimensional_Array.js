// Accessing Multi Dimensional Array Data Using Indexes

let multiDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(multiDimensionalArray); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(multiDimensionalArray[0][0]); // Output: 1

console.log(multiDimensionalArray[1][2]); // Output: 6

console.log(multiDimensionalArray[2][1]); // Output: 8

console.log(multiDimensionalArray[2][2]); // Output: 9


let multiDimensionalArray1 = [
    [1, "two", true],
    [4, "five", 6],
    [7, 8, "nine"]
];

console.log(multiDimensionalArray1); // Output: [[1, "two", true], [4, "five", 6], [7, 8, "nine"]]

console.log(multiDimensionalArray1[0][1]); // Output: "two"

console.log(multiDimensionalArray1[1][1]); // Output: "five"

console.log(multiDimensionalArray1[2][2]); // Output: "nine"


// You can also modify the values in a multi-dimensional array by accessing them using their indices and assigning a new value.

multiDimensionalArray[0][1] = 20;
multiDimensionalArray[0][2] = 40;
console.log(multiDimensionalArray); // Output: [[1, 20, 40], [4, 5, 6], [7, 8, 9]]

// you can also nest arrays within arrays to create more complex data structures.


// For example, you can have an array of arrays of arrays, and so on.


let complexArray = [
    [
        [1, 2, 3], 
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

console.log(complexArray); // Output: [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]

console.log(complexArray[0][1][2]); // Output: 6

console.log(complexArray[1][0][1]); // Output: 8

console.log(complexArray[1][1][0]); // Output: 10