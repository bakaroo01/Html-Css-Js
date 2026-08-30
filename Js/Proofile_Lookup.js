// Profile  Lookup

const contacts = [
    {
        "firstName" : "Akira", 
        "lastName" : "laine",
        "number" : "0617665423",
        "Likes" : ["Pizza", "Coding", "Brownie Points"],
    },

    {
         "firstName" : "Harry", 
        "lastName" : "Potter",
        "number" : "099433345",
        "Likes" : ["Hogwarts", "Magic", "Hagrid"],
    },

    {
         "firstName" : "Sherlock", 
        "lastName" : "Holmes",
        "number" : "0425638789",
        "Likes" : ["Intriguing Cases", "Violin"],
    },

    {
         "firstName" : "Kristian", 
        "lastName" : "Vos",
        "number" : "unknown",
        "Likes" : ["JavaScript", "Gaming", "Foxes"],
    },
    
];

function lookUpProfile(name, prop){
    for (let x = 0; x < contacts.length; x++){
        if(contacts[x].firstName === name){
            if(contacts[x].hasOwnProperty(prop)){
                return contacts[x][prop]
            }
            return "No such property"
        }
    }
    return "No such contact";

}

console.log(lookUpProfile("Akira","Likes"));