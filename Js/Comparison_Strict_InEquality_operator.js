// Comparison with the Strict Inequality Operator

// The strict inequality operator (!==) checks if two values are not equal

//  or not of the same data type.

// For example, the string "10" and the number 10 are not considered equal

//  with the strict equality operator,

// so they are considered unequal with the strict inequality operator.

function strictInequalityTest(myVal) {
    if (myVal !== 25) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(strictInequalityTest(25)); // This will log "Equal"
console.log(strictInequalityTest(5));  // This will log "Not Equal"
console.log(strictInequalityTest("25")); // This will log "Not Equal"


// Here's another example of a function that uses the strict inequality operator to compare values

function compareValuesStrictInequality(value1, value2) {    
    if (value1 !== value2) {
        return "The values are not equal";
    }
    return "The values are equal";
}

console.log(compareValuesStrictInequality(5, 5)); // This will log "The values are equal"

console.log(compareValuesStrictInequality(5, 10)); // This will log "The values are not equal"

console.log(compareValuesStrictInequality(5, "5"));// This will log "The values are not equal" 
//because they are of different types