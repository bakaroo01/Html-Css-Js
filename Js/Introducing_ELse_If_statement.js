// Intoducing the Else If Statement

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    }else {

    return "Between 5 and 10";
}
}

console.log(testElseIf(4)); // This will log "Smaller than 5"
console.log(testElseIf(6)); // This will log "Between 5 and 10"
console.log(testElseIf(11)); // This will log "Greater than 10"

// Here's another example of a function that uses the else if statement to compare values

function compareElseIf(value1, value2) {
    if (value1 > value2) {
        return "The first value is greater than the second value";
    }
    else if (value1 < value2) {
        return "The first value is less than the second value";
    }
    else {
        return "The first value is equal to the second value";
    }
}

console.log(compareElseIf(10, 5));  // This will log "The first value is greater than the second value"
console.log(compareElseIf(5, 10));  // This will log "The first value is less than the second value"
console.log(compareElseIf(7, 7));   // This will log "The first value is equal to the second value"