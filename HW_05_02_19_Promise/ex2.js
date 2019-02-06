const needle = require('needle');
const fs = require('fs-extra');
let swapiData;
let swapiDataFile;

needle('get', 'https://swapi.co/api/people/5/')
  .then( function(resp) {
    console.log(resp.statusCode);
    console.log(resp.body);
    swapiData = resp.body;
  })
  .catch(function(err) {
    console.log('error!!!');
  });