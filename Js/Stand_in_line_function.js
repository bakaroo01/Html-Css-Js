// Stand in line function

// Example

function nextInLine(arr, item) {    
    arr.push(item);
    return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

// Display the testArr before and after calling the function
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));