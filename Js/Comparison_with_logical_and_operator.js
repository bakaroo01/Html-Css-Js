// Comparison with Logical AND Operator

// The logical AND operator (&&) checks if both conditions are true.

function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(30)); // This will log "Yes"
console.log(testLogicalAnd(10)); // This will log "No"

// Here's another example of a function that uses the logical AND operator to compare values

function compareLogicalAnd(value1, value2) {
    if (value1 > 0 && value2 > 0) {
        return "Both values are positive";
    }
    return "At least one value is not positive";
}

console.log(compareLogicalAnd(5, 10));  // This will log "Both values are positive"
console.log(compareLogicalAnd(-5, 10)); // This will log "At least one value is not positive"   
console.log(compareLogicalAnd(0, 0)); // This will log "At least one value is not positive"
