var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const app = express()
const cors = require('cors');
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY

dotenv.config();
let userInput = []

app.use(cors());
app.use(bodyParser.json())//bodyParser not needed with express ver 4.16.0 or higher
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//POST Route
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    const response = await fetch(apiURL)
    const mcData = await response.json()
    res.send(mcData)
})

//server is on port 8081
app.listen(8081, function () {
    console.log('app listening on port 8081')
})