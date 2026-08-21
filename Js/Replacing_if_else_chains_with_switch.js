// Replacing if Else chains with switch statements

// Instead of writing complex if and Else 

// function chainToSwitch(val){
//     let answer = "";


// if (val === "bob"){
//     answer = "Marley";

// } else if (val === 42){
//     answer = "The Answer";

// } else if (val === 1){
//     answer = "There is no #1";

// }   else if (val === 99){
//     answer = "Missed me by this much!";

// }  else if (val === 7){
//     answer = "Ate Nine";

// }

// return answer

// }

// console.log(chainToSwitch(42))// This will log The answer to the console

// instead of this long and complex if and Else Replace it with switch statement

function chainToSwitch(val){
    let answer = ""
    switch (val){
        case "bob":
            answer = "Marley";
            break;
        
         case 42:
            answer = "The Answer";
            break;

         case 1:
            answer = "There is no #1";
            break;

         case 99:
            answer = "Missed me by this much!";
            break;

         case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}

console.log(chainToSwitch(7)) // This will log Ate Nine to the console



