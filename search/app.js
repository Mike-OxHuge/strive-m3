let homeAlbums = []
let cards = document.querySelector(".album-row")
let artist = document.querySelector(".artist-row")
let hidden = document.querySelector(".hidden")
let sample = document.querySelector(".sample")
window.onload = function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then(response => response.json())
    .then ((albums)=>{
        console.log(albums);
        homeAlbums = albums;
        albums.data.forEach(album => {
            cards.innerHTML += `<div class="mb-4 text-center col-sm-6 col-md-4 col-lg-2">
            <img class="img-fluid" src="${album.album.cover_big}"><h6 class="text-white album-title mt-1">${album.album.title}</h6></div>
            <div class="mb-4 text-center">`
        })
    })
    .catch(err => {
        console.error(err);
    });
}


function search(){
    let search = document.querySelector(".search-input").value
    if(search.length !=0){
        cards.innerHTML = " "
        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`)
        .then(response => response.json())
        .then ((albums)=>{
            console.log(albums);
            homeAlbums = albums;
            albums.data.forEach(album => {
                artist.innerHTML= `
                <div class="artist-container">
                <img src="${album.artist.picture_small}" class="rounded-circle img-fluid mt-3 ml-3" style="width: 100px; height: 100px;" alt="...">
                <p><span class="artist-name ml-4 text-white" style = "font-size: large;">${album.artist.name}</span></p>
            </div>`
            
                cards.innerHTML += `<div class="mb-4 text-center col-sm-6 col-md-4 col-lg-2">
                <img class="img-fluid" src="${album.album.cover_big}"><h6 class="text-white album-title mt-1">${album.album.title}</h6></div>
                <div class="mb-4 text-center">`
            })
        })
        .catch(err => {
            console.error(err);
        });

    }else{
        // render the onload
    }

}


