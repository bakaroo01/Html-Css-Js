// Comparison with less than or equal to operator

// The less than or equal to operator (<=) checks if the value on the left is less than
// or equal to the value on the right.

function testLessThanOrEqual(val) {
    if (val <= 25) {
        return "Under 25";
    }
    if (val <= 55) {
        return "Under 55";
    }
    return "55 or Over";
}

console.log(testLessThanOrEqual(10)); // This will log "Under 25"
console.log(testLessThanOrEqual(30)); // This will log "Under 55"
console.log(testLessThanOrEqual(60)); // This will log "55 or Over"

// Here's another example of a function that uses the less than or equal to operator to compare values

function compareLessThanOrEqual(value1, value2) {
    if (value1 <= value2) {
        return "The first value is less than or equal to the second value";
    }
    return "The first value is not less than or equal to the second value";
}

console.log(compareLessThanOrEqual(5, 10));  // This will log "The first value is less than or equal to the second value"
console.log(compareLessThanOrEqual(10, 5));  // This will log "The first value is not less than or equal to the second value"
console.log(compareLessThanOrEqual(7, 7));   // This will log "The first value is less than or equal to the second value"

