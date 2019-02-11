const fs = require('fs-extra');
const crypto = require('crypto');
const util = require('util');

const hashOfFile = function(urlInput, urlOutput) {
    let streamInput = fs.createReadStream(urlInput, 'utf-8');
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

hashOfFile('D:/Work_Proga/Procode/HTML_CSS/L_29_11_18_CS-GO/index.html', 'stream_write.txt')
    .then((hashData) => {
        console.log('File was upload');
        console.log(`Hash = ${hashData}`);
    })
    .catch((err) => {
        console.log(`You get an error: ${err}`);
    });