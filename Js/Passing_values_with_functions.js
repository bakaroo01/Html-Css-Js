// Passing Values to Functions with Arguments

function withArguments(parameter) {
    console.log("The parameter passed to the function is: " + parameter);
}


withArguments("Hello, World!"); // Calling the function with an argument

// Parameter is a placeholder that can accept any value passed to the function when it is called.

//Parameter can be any value, including numbers, strings, or even other functions.

// While the parameter is a placeholder, the argument is the actual value that is passed to the 

// function when it is called.

// Example of a function with multiple parameters

function multipleParameters(num1, num2) {
    console.log("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2));
}

multipleParameters(5, 10); // Calling the function with two arguments