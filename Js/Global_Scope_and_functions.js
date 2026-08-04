// Global scope and functions

// In JavaScript, variables declared outside of any function are in the global scope.
// This means they can be accessed from anywhere in the code, including inside functions.

var globalVariable = "I am a global variable!";

function accessGlobalVariable() {
    console.log(globalVariable); // Accessing the global variable inside a function
}

accessGlobalVariable(); // Calling the function to demonstrate access to the global variable

// However, it's important to be cautious when using global variables, 

// as they can lead to unexpected behavior if not managed properly.

// Example of a function that modifies a global variable

function modifyGlobalVariable() {
    globalVariable = "I have been modified!";
}

modifyGlobalVariable(); // Calling the function to modify the global variable

console.log(globalVariable); // Logging the modified global variable to the console


