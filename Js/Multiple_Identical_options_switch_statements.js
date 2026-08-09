// Multiple Identical options in switch statements

function sequentialSizes(val) {
    let answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5: 
        case 6:
            answer = "Mid"
            break
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
        default:
            answer = "Not in range"
            break;
    }

    return answer;
}

console.log(sequentialSizes(10))//This will log Not in range
console.log(sequentialSizes(7))// This will log High
console.log(sequentialSizes(6))// This will log Mid
console.log(sequentialSizes(1))// This will log Low