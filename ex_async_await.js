const a = (input) =>{
    return new Promise((resolve, reject) => {
        if(typeof input !== 'number'){
            reject('error')
        }else{
            const data = input % 2 === 0; //true = เลขคู่, false = เลขคี่
            const delay = data ? 2000:1000; //true = 2000 ms, false = 1000 ms
            setTimeout(() => {
                resolve (data ? 'even':'odd')
            },delay)
        }

    })
}
// a(12)
//     .then((info)=>{
//         console.log(info);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
const b = async() =>{
    try {
        const res = await a(2)   
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
b()
