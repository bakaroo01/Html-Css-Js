// Default option in switch statement

function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";    
            break; 
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
    return answer;
}
console.log(switchOfStuff("a")); // This will log "apple"
console.log(switchOfStuff("b")); // This will log "bird"
console.log(switchOfStuff("c")); // This will log "cat"
console.log(switchOfStuff("d")); // This will log "stuff" because "d" does not match any case, 
// so the default case is executed
