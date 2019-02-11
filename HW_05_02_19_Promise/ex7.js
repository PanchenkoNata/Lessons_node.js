const fs = require('fs-extra');
const crypto = require('crypto');
const util = require('util');

const hashOfFile = function(url_input, url_output) {
    return new Promise((resolve, reject) => {
        let stream_input = fs.createReadStream(url_input, 'utf-8');
        let output = fs.createWriteStream(url_output);
        const hash_sum = crypto.createHash('sha1'); //'sha1' algorithm - consider using sha256

	    hash_sum.setEncoding('hex');
        stream.pipe(hash_sum);
        stream_input.on('error', (err) => {
            reject('File wasn`t found');
        });
        stream_input.pipe(output);
        if (output.length === 0) {
            console.log("not write");
            reject('File wasn`t write');
        }
        resolve(hash);
    });
}

hashOfFile('D:/Work_Proga/Procode/HTML_CSS/L_29_11_18_CS-GO/index.html', 'stream_write.txt')
    .then((hash_data) => {
        console.log('File was upload');
        console.log(`Hash = ${hash_data}`);
    })
    .catch((err) => {
        console.log(`You get an error: ${err}`);
    });