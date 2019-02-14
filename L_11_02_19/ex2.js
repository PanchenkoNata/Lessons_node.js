const express = require('express');
const app = express();

let counter = 0;

app.use((req, res, next) => {
    console.log(Date.now());
    counter++;
    next();
});

app.get('/', (req, res, next) => {
    res.send(`counter: ${counter}`);
});
app.get('/home', (req, res, next) => {
    res.send(`home page`);
});

app.listen(3000, () => {
    console.log('Listen port 3000');
});
