// Using Objects for Lookups

function phoneticLookup(val){
    let result = "";

    const mylookup ={
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "Frank",

    }

    result = mylookup[val]

    return result;

}

console.log(phoneticLookup("alpha"))