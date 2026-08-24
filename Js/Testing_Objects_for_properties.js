// Testing Objects for Properties

function checkObj(obj, checkProp) {

    // Check if the object has the property
    if (obj.hasOwnProperty(checkProp)) {

        // If it exists, return its value
        return obj[checkProp];
    }

    // If the property does not exist
    return "Not found";
}


// Create an object
const myObj = {
    name: "Abukar",
    age: 24,
    city: "Mogadishu"
};


// Test the function
console.log(checkObj(myObj, "name"));
console.log(checkObj(myObj, "age"));
console.log(checkObj(myObj, "city"));
console.log(checkObj(myObj, "country"));