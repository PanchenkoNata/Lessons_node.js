const promTimer = (timeout) => {
    return new Promise((resolve, reject) => {
       setTimeout(resolve, timeout);
    });
}

new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    promTimer(3000);
}).then(() => {
    console.log('finish');
});