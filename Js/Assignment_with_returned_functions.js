// Assignment with returned vlalue from function

function functionWithReturn() {
    var localVariable = "I am a local variable.";
    return localVariable; // Returning the value of localVariable
}
var result = functionWithReturn();
console.log(result); // This will log "I am a local variable."

// Here's another example of a function that does return a value:

function add(a, b) {
    return a + b; // Returning the sum of a and b
}
var result = add(5, 10);
console.log(result); // This will log 15