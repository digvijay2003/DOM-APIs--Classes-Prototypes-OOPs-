const form = document.querySelector("#searchform");

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchtext = form.elements.query.value;
    const config = {params : {q : searchtext}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    newImages(res.data);
    form.elements.query.value = "";
})

const newImages = (shows) =>{
    for (let result of shows){
        if (result.show.image){
            const image = document.createElement('IMG');
            image.src = result.show.image.medium;
            document.body.append(image)
        }
    }
}