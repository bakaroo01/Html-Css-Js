// Undefined value returned from function

function functionWithoutReturn() {
    var localVariable = "I am a local variable.";
    console.log(localVariable);
}
var result = functionWithoutReturn();
console.log(result); // This will log undefined

// In JavaScript, if a function does not explicitly return a value, it returns undefined by default.


// you can also return explicitly undefined if you want to indicate that the function does not return a meaningful value:

function functionReturningUndefined() {
    return undefined; // Explicitly returning undefined
}

var resultReturningUndefined = functionReturningUndefined();
console.log(resultReturningUndefined); // This will log undefined