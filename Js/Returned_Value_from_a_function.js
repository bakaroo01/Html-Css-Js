// Returned Value from a function


// here's an example of a function that returns a value:

function functionWithReturn() {
    var localVariable = "I am a local variable.";
    return localVariable; // Returning the local variable
}
var resultWithReturn = functionWithReturn();
console.log(resultWithReturn); // This will log "I am a local variable."


//here's another example of a function that  doesn't returns a value:

function functionWithoutReturn() {
    var localVariable = "I am a local variable.";
    console.log(localVariable);
}
var result = functionWithoutReturn();
console.log(result); // This will log undefined

// In summary, if a function does not have a return statement, it will return undefined.

//  If it has a return statement, it will return the specified value.