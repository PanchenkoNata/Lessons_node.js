const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send(`It is homePage`);
});

app.get('/routWithData', function (req, res) {
    //data from this route 
    res.json({ "data" : "This is data from /routWithData" });
});

app.get('/index.html', (req, res, next) => {
    //connect file /index.html from our directory
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Listen port 3000');
});
