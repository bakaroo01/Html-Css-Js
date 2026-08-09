// Select With Switch Statements

// just like if and else but much easier to read and maintain


function caseInSwitch(value) {
    let answer = "";
    switch (value) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1)); // This will log "alpha"
console.log(caseInSwitch(2)); // This will log "beta"
console.log(caseInSwitch(3)); // This will log "gamma"
console.log(caseInSwitch(4)); // This will log "delta"