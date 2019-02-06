const promTimer = (timeout) => {
    return new Promise((resolve, reject) => {
        // console.log('stage 2');
        setTimeout(resolve, timeout);
    });
}
promTimer(2000)
    .then(() => {
        console.log('stage 1');
    });

new Promise((resolve, reject) => {
    // console.log('stage1');
    resolve();
}).then(() => {
    return promTimer(4000).then(() => { 
        console.log('stage10');
    });
}).then(() => {
    console.log('finish');
});