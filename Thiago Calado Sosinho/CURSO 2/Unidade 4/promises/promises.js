const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Concluida');
        // reject(new Error('CARACA'));
    },2000);
});

promessa.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});