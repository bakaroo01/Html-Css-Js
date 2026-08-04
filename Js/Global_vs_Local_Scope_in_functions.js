// Global vs Local Scope in Functions

var globalVariable = "I am a global variable.";

function globalScopeFunction() {
    console.log(globalVariable); // Accessing the global variable inside the function
}

globalScopeFunction(); // Calling the function to demonstrate global scope

// console.log(globalVariable); // Accessing the global variable outside the function


function localScopeFunction() {
    var localVariable = "I am a local variable.";
    console.log(localVariable); // Accessing the local variable inside the function
}
localScopeFunction(); // Calling the function to demonstrate local scope

// Trying to access the local variable outside the function will result in an error

// console.log(localVariable); // Uncommenting this line will throw a ReferenceError


// If you declare a variable without var, let, or const inside a function, it becomes a global variable (not recommended):
function createGlobalVariable() {
    globalVarWithoutDeclaration = "I am a global variable without declaration.";
    console.log(globalVarWithoutDeclaration); // Accessing the variable inside the function
}
createGlobalVariable(); // Calling the function to demonstrate the creation of a global variable without declaration


// console.log(globalVarWithoutDeclaration); // Accessing the variable outside the function (will work, but not recommended)

// Note: It's best practice to always declare variables with var, let, or const to avoid unintentional global variables.

// if you create a local variable with the same name as a global variable, 

// the two variables will be treated as separate entities, 

// and the local variable will shadow the global variable within its scope:

var shadowedVariable = "I am a shadowed global variable.";

function shadowingFunction() {
    var shadowedVariable = "I am a shadowed local variable.";
    console.log(shadowedVariable); // Accessing the local variable inside the function
}       

shadowingFunction(); // Calling the function to demonstrate variable shadowing

console.log(shadowedVariable); // Accessing the global variable outside the function