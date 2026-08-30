// Replace Loops Using Recursion

function sum (arr, n){
    if (n <= 0){
        return 0;
    } else {
        return sum (arr, n - 1) + arr[n - 1]
    }
}

console.log(sum([2, 3, 4, 5], 3))


// This is a little bit complicated since the function calls it self and untill

// a specific condition is met and it is used for advanced level but the concept is the same.