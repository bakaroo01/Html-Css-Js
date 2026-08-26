// Accessing Nested Objects

const myStorage = {
    "car" : {
        "inside" : {
            "glovebox" : "maps",
            "passenger seat" : "crumbs",
        },

        "outside" : {
            "trunk" : "jack",

        }

    }
};

const gloveBoxContents = myStorage.car.inside.glovebox;
const gloveBoxContent2 = myStorage.car.inside["passenser seat"];

console.log(gloveBoxContents) // this will log maps and since 
// the word glovebox dosn't have a space in it we can use the dot notation to access


console.log(gloveBoxContent2) // this will log crumbs and since 
// the word passenger seat does have a space in it we can only use the Bracket notation to access 
