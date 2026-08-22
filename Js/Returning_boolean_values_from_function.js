// Returning boolean values from functions

// function isEqual(a,b){
//     if(a === b){
//         return true;
//     } else {
//         return false;
//     }
// }

// rather than this much code we can simplify it with 

function isEqual(a,b){
    return a === b;
}

console.log(isEqual(10,15)) // This will log false to the console even with out the else statement
// since we are using the strict comparison operator