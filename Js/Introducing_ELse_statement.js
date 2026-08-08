// Introducing the Else Statement

function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }   
    return result;
}
console.log(testElse(4)); // This will log "5 or Smaller"
console.log(testElse(6)); // This will log "Bigger than 5"
console.log(testElse(5)); // This will log "5 or Smaller"

// Here's another example of a function that uses the else statement to compare values

function compareElse(value1, value2) {
    if (value1 >= value2) {
        return "The first value is greater or equal to the second value";
    } else {
        return "The first value is not greater or equal to the second value";
    }
}
console.log(compareElse(10, 5));  // This will log "The first value is greater or equal to the second value"
console.log(compareElse(5, 10));  // This will log "The first value is not greater or equal to the second value"