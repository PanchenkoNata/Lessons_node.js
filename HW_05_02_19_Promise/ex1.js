const needle = require('needle'); //lib for reading API for HTTP
const fs = require('fs-extra');   //lib for working whith fales
const util = require('util');     //util.inspect - Return a string representation of object 
let swapiData = {};

needle('get', 'https://swapi.co/api/people/5/')
    .then( function(resp) {
        swapiData = resp.body;
        console.log(resp.statusCode);
        console.log(swapiData);
        console.log('the reading is finish');
    })
    .then(() => {
        return fs.writeFile('swapiDataFile.txt', util.inspect(swapiData))
            // .then ((err) => {
            //     if (err) throw err;
            //     // console.log('start writing in the file');
            // })
                    .catch(function(err) {
                        console.log('Writing error!!!');
                    });
    })
    .catch(function(err) {
        console.log('Reading error!!!');
    }); 
console.log('finish');
