const promTimer = (timeout) => {
    return new Promise((resolve, reject) => {
        console.log('stage 2');
        setTimeout(resolve, timeout);
        console.log('stage 3');
    });
}
promTimer(2000)
    .then(() => {
        console.log('stage 1');
    });