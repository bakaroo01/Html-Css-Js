// Comparison with Logical OR Operator

// The logical OR operator (||) checks if at least one of the conditions is true.

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside the range";
    }
    return "Inside the range";
}

console.log(testLogicalOr(5));  // This will log "Outside the range"
console.log(testLogicalOr(15)); // This will log "Inside the range"
console.log(testLogicalOr(25)); // This will log "Outside the range"

// Here's another example of a function that uses the logical OR operator to compare values

function compareLogicalOr(value1, value2) {
    if (value1 < 0 || value2 < 0) {
        return "At least one value is negative";
    }
    return "Both values are non-negative";
}

console.log(compareLogicalOr(-5, 10)); // This will log "At least one value is negative"
console.log(compareLogicalOr(5, 10));  // This will log "Both values are non-negative"

