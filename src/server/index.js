var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

// Create new instance of express
const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())//bodyParser not needed with express ver 4.16.0 or higher
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

// API setup
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST API and fetch API data
let userInput = []
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    const response = await fetch(apiURL)
    const objectData = await response.json()
    //console.log(objectData)
    res.send(objectData)
})

// set express server to listen on port 8081 and console logs for verification
app.listen(8081, function () {
    console.log('Express server is up and listening on port 8081')
})