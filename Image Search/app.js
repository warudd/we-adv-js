const accessKey = 'chHI2raR7-GnedQQyfsB6hFD6Zph-DugLX5w6qjQgSs';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = '';
let page = 1;

if (page === 1 ){
    searchResult.innerHTML = '';
}

async function searchImage(){
    keyword = searchBox.value;
    console.log(keyword);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const results = data.results;
    results.map((results) => {
        const image = document.createElement('img');
        image.src = results.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = results.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })

    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})
showMoreBtn.addEventListener('click', ()=>{
    page++
    searchImage();
})