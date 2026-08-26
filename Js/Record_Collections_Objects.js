// Record Collections

const recordCollection = {
    2548 : {
        albumTitle : 'Slippery When Wet',
        artist : 'Boni Jovi',
        tracks : ['Let It Rock' , 'You Give Love A Bad Name' ]
    },
     2468 : {
        albumTitle : '1999',
        artist : 'Prince',
        tracks : ['1999' , 'Little Red Corvette' ]
    },
     1245 : {
        artist : 'Robert Palmer',
        tracks : []
    },
    5439 : {
        albumTitle : 'ABBA Gold',
    }
};

function updateRecords(records, id, prop, value){
    if (value === ""){
        delete records [id][prop]
    } else if (prop !== "tracks" && value !== "") {
        records [id][prop] = value
    } else if (prop === "tracks" && value !== "" && records [id].hasOwnProperty("tracks")) {
        records [id][prop].push(value)
    } else if (prop === "tracks" && value !== "") {
        records [id][prop] = [value]
    } 
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))