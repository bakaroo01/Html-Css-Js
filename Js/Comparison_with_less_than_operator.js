// Comparison wwithe the less than operator

// The less than operator (<) checks if the value on the left is less than the value on the right.

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }   
    return "55 or Over";
}

console.log(testLessThan(10)); // This will log "Under 25"
console.log(testLessThan(30)); // This will log "Under 55"
console.log(testLessThan(60)); // This will log "55 or Over"    

// Here's another example of a function that uses the less than operator to compare values

function compareLessThan(value1, value2) {
    if (value1 < value2) {
        return "The first value is less";
    }
    return "The first value is not less";
}

console.log(compareLessThan(5, 10));  // This will log "The first value is less"
console.log(compareLessThan(10, 5));  // This will log "The first value is not less"
