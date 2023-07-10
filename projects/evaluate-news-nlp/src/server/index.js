var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require("axios");

dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(cors())
app.use(bodyParser.json())  // to use json

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analyze', async (req, res) => {
    console.log(req.body)
    const message = req.body.txt
    const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?lang=en'
    const key = '&key=' + process.env.API_KEY
    const txt = '&txt=' + message

    const result = await axios(baseUrl + key + txt);
    
    try {
        res.status(200).send(result.data);
    } catch (e) {
        res.status(400).send(e);
    }
})