const h1Ele = document.querySelector('#result')
const h1EleAsync = document.querySelector('#result-async')

function promise() {
    return new Promise( (resolve , reject) =>{
        setTimeout(() => {
            resolve((Math.random()*100).toFixed(0))
        }, 3000);
    })
}
promise().then((res) =>{
    h1Ele.append(`Data is ${res}`);
}).catch((err) =>{
    
})

const a = async() => {
    const x = await promise();
    h1EleAsync.append(`Data is ${x}`);
}
a()