let homeAlbums = []
let cards = document.querySelector(".album-row")
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


