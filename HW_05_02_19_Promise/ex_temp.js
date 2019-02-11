const fs = require('fs-extra');
const util = require('util');

let stream = new fs.ReadStream('package.json');
let counter = 0;

stream.on('readable', ()=>{
    let data = stream.read();
    counter +=1;
    console.log(counter);
    console.log(util.inspect(data));
});

stream.on('end', ()=>{
    console.log('END');
});

stream.on('error', (err) => {
    console.log('ERROR!' + err);
})



// //////////////


let data = ''
stream.on('data', part => data += part);

stream.on('end', () => {
        console.log('END');
    });



// /////////////

stream.on('readable', ()=>{
    let data = stream.read();
    counter +=1;
    console.log(counter);
    console.log(util.inspect(data));
});

stream.on('end', ()=>{
    console.log('END');
});

stream.on('error', (err) => {
    console.log('ERROR!' + err);
})
