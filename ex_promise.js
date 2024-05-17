const storeData = (input) => {
    return new Promise ((resolve, reject) => {
        console.log(typeof input);
        if(typeof input !== 'number'){
            reject('Error')
        }
        else{
            setTimeout(()=> {
               if(input % 2 !== 0 ){
                resolve('odd')
               }
               else {
                resolve('even')
               }
            },1000)
        }
    })
}

storeData(1226)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })