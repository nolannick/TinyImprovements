const dbKudos = require("../models/Kudos");
const dbUser = require("../models/User");
// require mongoose
//connect mongoose
//import mongoose
//run this only once in Heroku. 'npm run seed' in console

//updates based on the mongo guide to properly point to 
mongoose.connect('mongodb://localhost/TinyImprovementsDb', { useNewUrlParser: true });  

let users = [
    {
        "username": "John Lennon"
    },
    {
        "username": "Paul McCartney"
    },
    {
        "username": "George Harrison"
    },
    {
        "username": "Ringo Star"
    }
];

// let kudos = [
//     {
//         "title": "Great drum solo",
//         "body": "Ringo had a great drump solo in our last show.",
//         "sender": 0,
//         "reciever": 3
//     },
//     {
//         "title": "Cool lyrics for a song",
//         "body": "Paul wrong some sweet lyrics for our Sergent Peppers albumn",
//         "sender": 3,
//         "reciever": 1
//     },
//     {
//         "title": "The Sitar was a great addition",
//         "body": "Even though George spent way too much time in Asia, he really has mastered the Sitar",
//         "sender": 1,
//         "reciever": 2
//     },
// ]

//promise.all
    const usersPromise = dbUser.bulkWrite(
        //write data here
    );
    
    const kudosPromise = dbKudos.bulkWrite(
        //write data here
    );

    Promise.all([usersPromise, KudosPromise]).then(function () {
        mongoose.close();
    })


    // {
    //     "kudos": [],
    //     "_id": "5c7fe6d4eec28c7d27abb4c9",
    //     "username": "John Lennon",
    //     "__v": 0
    // },
    // {
    //     "kudos": [],
    //     "_id": "5c7fe6fbeec28c7d27abb4ca",
    //     "username": "Paul McCartney",
    //     "__v": 0
    // },
    // {
    //     "kudos": [],
    //     "_id": "5c7fe703eec28c7d27abb4cb",
    //     "username": "George Harrison",
    //     "__v": 0
    // },
    // {
    //     "kudos": [],
    //     "_id": "5c7fe70aeec28c7d27abb4cc",
    //     "username": "Ringo Star",
    //     "__v": 0
    // }