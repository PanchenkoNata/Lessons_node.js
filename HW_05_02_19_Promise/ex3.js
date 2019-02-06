const promTimer = (timeout) => {
    return new Promise((resolve, reject) => {
        // console.log('stage 2');
        setTimeout(resolve, timeout);
    });
}
promTimer(4000)
    .then(() => {
        console.log('stage 1');
    });

new Promise((resolve, reject) => {
    // console.log('stage1');
    resolve(4000);
}).then((time) => {
    return promTimer(time).then(() => { 
        console.log(time, 'stage10');
    });
}).then(() => {
    console.log('finish');
});