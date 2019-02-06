console.log('start');
const prom = new Promise((resolve, reject) => {
    console.log('stage 1');
    // resolve();
    setTimeout(() => {
        console.log('abc');
        resolve();
    }, 1000);
});
prom.then(() => {
    console.log('stage2');
});
console.log('stop');