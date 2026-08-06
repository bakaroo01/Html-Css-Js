// Comparison with the Strict Equality Operator

function strictEqualityTest(myVal) {
    if (myVal === 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(strictEqualityTest(10)); // This will log "Equal"
console.log(strictEqualityTest(5));  // This will log "Not Equal"

// The strict equality operator (===) checks if two values are equal and of the same data type.

// For example, the string "10" and the number 10 are not considered equal with the strict equality operator.

console.log(strictEqualityTest("10")); // This will log "Not Equal" because "10" is a string and 10 is a number

// here's another example of a function that uses the strict equality operator to compare values

function compareValuesStrict(value1, value2) {
    if (value1 === value2) {
        return "The values are equal";
    }
    return "The values are not equal";
}

console.log(compareValuesStrict(5, 5));       // This will log "The values are equal"
console.log(compareValuesStrict(5, "5"));     // This will log "The values are not equal" because they are of different types
console.log(compareValuesStrict(5, 10));      // This will log "The values are not equal"