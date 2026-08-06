// Comparison with the  Greater Than Operator

// The greater than operator (>) checks if the value on the left is greater than the value on the right.

// the greater than operator can be used to compare numbers, strings, and other data types in JavaScript. 

function testGreaterThan(Val) {
    if (Val > 100) {
        return "Over 100";
    }
    if (Val > 10){
        return "Over 10";
    }
    return "10 or Under"

}
console.log(testGreaterThan(50));// This will log "Over 10"
console.log(testGreaterThan(101));// This will log "Over 100"
console.log(testGreaterThan(10));// This will log "10 or Under"

// Here's another example of a function that uses the greater than operator to compare values

function compareGreaterThan(value1, value2) {
    if (value1 > value2) {
        return "The first value is greater";
    }
    return "The first value is not greater";
}
console.log(compareGreaterThan(10, 5));  // This will log "The first value is greater"
console.log(compareGreaterThan(5, 10));  // This will log "The first value is not greater"  

