const needle = require('needle'); //lib for reading API for HTTP
const fs = require('fs-extra');   //lib for working whith fales
const util = require('util');     //util.inspect - Return a string representation of object 

//get info from link
needle('get', 'https://swapi.co/api/people/5/')
    //set info in swapiData
    .then((resp) => {
        console.log('Start of reading');
        console.log(resp.statusCode);
        return resp.body;
    })
    //write info in the file
    .then((data) => {
        return fs.writeFile('swapiDataFile.txt', util.inspect(data))
                .then (() => {
                    console.log('writing is successful');
                })        
                //throw error of writing
                .catch(function(err) {
                    console.log('Writing error!!!');
                });
    })
    //throw error of reading
    .catch(function(err) {
        console.log('Reading error!!!');
    });
