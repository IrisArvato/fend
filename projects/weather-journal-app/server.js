// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
app.listen(port, listening);

function listening() {
    console.log('Server is running at http://localhost:' + port + '...');
}

// Get Route
app.get('/all', function (req, res) {
    if (projectData.zip == undefined) {
        res.status(204).send({
            message: "No content"
        });
        return;
    }

    res.status(200).send(projectData);
});

// Post Route
app.post('/add', function (req, res) {
    console.log(req.body); 
    projectData = {
        date : req.body.date,
        temp : req.body.temp,
        content : req.body.content,
        zip : req.body.zip,
    };

    res.status(201).send({
        message: "Data saved successfully."
    });
});
