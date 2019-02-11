const needle = require('needle');
const fs = require('fs-extra');
const util = require('util');

needle('get', 'https://swapi.co/api/people/5/')
    .then ((resp) => {
        return (resp.body);
    })
    .then ((data) => {
        return fs.writeFile('swapiInfo.txt', util.inspect(data));
    })
    .catch((err) => {
        console.log('ERROR!');
    })
