const fs = require('fs-extra');
const crypto = require('crypto');
const request = require('request');
const util = require('util');

const hashOfFile = function(urlInput, urlOutput) {
    let streamInput = request(urlInput, 'utf-8');
    let output = fs.createWriteStream(urlOutput);
    const hashSum = crypto.createHash('sha1'); //'sha1' algorithm - consider using sha256

    streamInput.on('error', (err) => {
        console.log("not found");
        throw('File wasn`t found');
    });

    hashSum.setEncoding('hex');
    streamInput.pipe(hashSum);
    streamInput.pipe(output);
    if (output.length === 0) {
        console.log("not write");
        throw('File wasn`t write');
    }

    return new Promise((resolve, reject) => {
        hashSum.on('finish', () => {
            const hashFullSum = hashSum.read();
            resolve(hashFullSum);
        });
    });
}

hashOfFile('https://swapi.co/api/people/5/', 'stream_write.txt')
    .then((hashData) => {
        console.log('File was upload');
        console.log(`Hash = ${hashData}`);
    })
    .catch((err) => {
        console.log(`You get an error: ${err}`);
    });

hashOfFile('https://github.com/PanchenkoNata/L_29_11_18_CS-GO/blob/master/index.html', 'stream_write2.txt')
    .then((hashData) => {
        console.log('File was upload');
        console.log(`Hash = ${hashData}`);
    })
    .catch((err) => {
        console.log(`You get an error: ${err}`);
    });