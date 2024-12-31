var express = require("express");
var bodyParser = require("body-parser");

const app = express();
const users = []; // Array to store user data

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Handle the sign-up request
app.post("/sign_up", (req, res) => {
    const user = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phno: req.body.phno,
        gender: req.body.gender,
        branch: req.body.branch,
        state: req.body.state,
        password: req.body.password
    };

    users.push(user); // Store the user data in the array
    console.log("User Data:", users); // Print the user array to the terminal

    return res.redirect('signup_successful.html'); // Redirect to the success page
});

// Serve the main page
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.html');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});


// netstat -ano | findstr :3000










































// var express = require("express");
// var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

// const app = express();

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// mongoose.connect('mongodb://localhost:27017/Database');
// var db = mongoose.connection;
// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// app.post("/sign_up", (req, res) => {
//     var name = req.body.name;
//     var age = req.body.age;
//     var email = req.body.email;
//     var phno = req.body.phno;
//     var gender = req.body.gender;
//     var branch = req.body.branch; 
//     var state = req.body.state;   
//     var password = req.body.password;

//     var data = {
//         "name": name,
//         "age": age,
//         "email": email,
//         "phno": phno,
//         "gender": gender,
//         "branch": branch, 
//         "state": state,  
//         "password": password
//     };

//     db.collection('users').insertOne(data, (err, collection) => {
//         if (err) {
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });
//     return res.redirect('signup_successful.html');
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('index.html');
// }).listen(3000);

// console.log("Listening on port 3000");
///node index.js



