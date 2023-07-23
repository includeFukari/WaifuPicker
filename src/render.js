const image = document.getElementById('image')

fetch('https://api.waifu.pics/sfw/waifu')
    .then(res => res.json())
    .then(data => {
        var imageUrl = data.url;
        image.src = imageUrl;
        console.log('Image URL:', imageUrl)
    })
    .catch(error => console.log('ERROR'))