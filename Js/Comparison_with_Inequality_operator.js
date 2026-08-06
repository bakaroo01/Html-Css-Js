// Comparison with the Inequality Operator

// The inequality operator (!=) checks if two values are not equal, 

// but it does not check for type equality.

// For example, the string "10" and the number 10 are considered equal with the equality operator, 

// so they are not considered unequal with the inequality operator.


function inequalityTest(myVal) {
    if (myVal != 10) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(inequalityTest(10)); // This will log "Equal"
console.log(inequalityTest(5));  // This will log "Not Equal"


// Here's another example of a function that uses the inequality operator to compare values

function compareValuesInequality(value1, value2) {
    if (value1 != value2) {
        return "The values are not equal";
    }
    return "The values are equal";
}

console.log(compareValuesInequality(8,10)); // This will log "The values are not equal"
console.log(compareValuesInequality(7, 7));  // This will log "The values are equal"
console.log(compareValuesInequality(7, "7"));  // This will log "The values are equal" 

// because they are considered equal with the equality operator,

//  so they are not considered unequal with the inequality operator.