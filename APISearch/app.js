const formEle = document.querySelector('#searchForm');

formEle.addEventListener('submit' , function (e){
    e.preventDefault()
    const searchTitle = e.target[0].value;
    let h1Ele = document.createElement('h1')
    let ulEle = document.createElement('ul')
    let liEle = document.createElement('li')
    console.log(searchTitle);
    axios.get(`https://api.publicapis.org/entries?title=${searchTitle}`)
        .then(res => {
            h1Ele = res.data.entries[0].Category
            liEle = res.data.entries[0].Description
            document.body.append(h1Ele)
            ulEle.append(liEle)
            document.body.append(ulEle)
        })
        .catch(err => {
            console.log(Error , err);
        })
})
