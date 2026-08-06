// Comparison with the Equality Operator

function equalityTest(myVal) {  
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(equalityTest(10)); // This will log "Equal"
console.log(equalityTest(5));  // This will log "Not Equal"

// The equality operator (==) checks if two values are equal, but it does not check for type equality.

// For example, the string "10" and the number 10 are considered equal with the equality operator.

console.log(equalityTest("10")); // This will log "Equal" because "10" is coerced to 10

// which is called type coercion.



// here's another example of a function that uses the equality operator to compare values

function compareValues(value1, value2) {
    if (value1 == value2) {
        return "The values are equal";
    }
    return "The values are not equal";
}

console.log(compareValues(5, 5));       // This will log "The values are equal"
console.log(compareValues(5, "5"));     // This will log "The values are equal" due to type coercion
console.log(compareValues(5, 10));      // This will log "The values are not equal"