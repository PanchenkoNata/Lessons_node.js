const fs = require('fs-extra');
const crypto = require('crypto');
const request = require('request');
const util = require('util');

const hashOfFile = function(urlInput, urlOutput) {
    let streamInput = request(urlInput, (err, response) => {
        if ( response.statusCode != 200) {
            throw('File wasn`t found');
        };
    });
    
    let hashSum = crypto.createHash('sha1'); //'sha1' algorithm - consider using sha256

    streamInput
        .on('error', () => {
            throw('Url wasn`t valid');
        })
        .pipe(fs.createWriteStream(urlOutput));
    
    hashSum.setEncoding('hex');
    streamInput.pipe(hashSum);

    return new Promise((resolve, reject) => {
        hashSum.on('finish', () => {
            const hashFullSum = hashSum.read();
            resolve(hashFullSum);
        });
    });
}

hashOfFile('https://swapi.co/api/people/5/', 'stream_write3.txt')
    .then((hashData) => {
        console.log('File was upload');
        console.log(`Hash = ${hashData}`);
    })
    .catch((err) => {
        console.log(`You get an error: ${err}`);
    })
    .then(() => {
        return hashOfFile('https://github.com/anchenkoNata/L_29_11_18_CS-GO/blob/master/index.html', 'stream_write4.txt')
            .then((hashData) => {
                console.log('File was upload');
                console.log(`Hash = ${hashData}`);
            })
            .catch((err) => {
                console.log(`You get an error: ${err}`);
            });
    })
    .then(() => {
        return hashOfFile('https://github.com/PanchenkoNata/L_29_11_18_CS-GO/blob/master/index.html', 'stream_write4.txt')
            .then((hashData) => {
                console.log('File was upload');
                console.log(`Hash = ${hashData}`);
            })
            .catch((err) => {
                console.log(`You get an error: ${err}`);
            });
    })

// hashOfFile('https://github.com/anchenkoNata/L_29_11_18_CS-GO/blob/master/index.html', 'stream_write4.txt')
//     .then((hashData) => {
//         console.log('File was upload');
//         console.log(`Hash = ${hashData}`);
//     })
//     .catch((err) => {
//         console.log(`You get an error: ${err}`);
//     });