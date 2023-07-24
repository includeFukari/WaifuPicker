const image = document.getElementById('image');
const waifuCategory = document.getElementById('waifuCategory');

document.getElementById('refresh').addEventListener('click', () => {
    getWaifuImage('https://api.waifu.pics/sfw/waifu')
});

function changeWaifuCategory() {
    return `https://api.waifu.pics/sfw/${waifuCategory.value}`;
}

function getWaifuImage(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let imageUrl = data.url;
        image.src = imageUrl;
        console.log('Image URL:', imageUrl)
    })
    .catch(error => console.log('ERROR'))
}