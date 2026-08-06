// Conditional logic with if statement

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
    return "It was false";

}

console.log(test(true));  // This will log "It was true"
console.log(test(false)); // This will log "It was false

// here's an example of a function that uses an if statement 

// to return different strings based on the boolean value passed to it

function trueOrFalse (wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true)); 
console.log(trueOrFalse(false)); 
 

