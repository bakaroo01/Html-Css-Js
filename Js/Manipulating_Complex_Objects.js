// Manipulating Complex Objects

const ourMusic = [
    {
        artist : "Daft Punk",
        title : "Homework",
        release_year : "1997",
        formats : [
            "CD",
             "Cassette",
             "LP"   
        ],

        gold : "true" 
    },
    {
        artist : "Billy Joel",
        title : "Piano Man",
        release_year : "1973",
        formats : [
            "CD",
             "8T",
             "LP"   
        ],
    }
];

console.log(ourMusic[0].artist)// this will log Daft Punk
console.log(ourMusic[1].release_year)// this will log 1973
console.log(ourMusic[0]["title"])// this will log Homework