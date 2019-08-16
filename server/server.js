const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

app.get('/api/music', (req, res) => {

    var exec = require('child_process').execFile;
    var fun = function () {
        
        exec("C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe", function (err, data) {
            
        });
    }
    fun();
    res.status(200).send();
    console.log('Running Windows Media Player...')
})
            
app.get('/api/email', (req, res) => {
    
    var exec = require('child_process').execFile;
    var fun = function () {
        
        exec("C:\\Program Files (x86)\\Mozilla Thunderbird\\thunderbird.exe", function (err, data) {
        });
    }
    
    fun();
    res.status(200).send();
    console.log('Running Thunderbird...')
})

app.get('/api/chrome', (req, res) => {
    
    var exec = require('child_process').execFile;

    var fun = function () {
        exec("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", function (err, data) {

        });
    }
    fun();
    res.status(200).send();
    console.log('Running Chrome...')
})