// Comparison with the Greater Than or Equal to Operator

// The greater than or equal to operator (>=) checks if the value on the left is greater than

//  or equal to the value on the right.

function testGreaterThanOrEqual(val) {
    if (val >= 100) {
        return "Over 100";
    }
    if (val >= 10) {
        return "Over 10";
    }
    return "10 or Under";
}

console.log(testGreaterThanOrEqual(50)); // This will log "Over 10"
console.log(testGreaterThanOrEqual(100)); // This will log "Over 100"
console.log(testGreaterThanOrEqual(10)); // This will log "Over 10"
console.log(testGreaterThanOrEqual(9)); // This will log "10 or Under"