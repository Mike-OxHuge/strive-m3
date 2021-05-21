var trendingQuery = [];
var trendingAlbums = [];
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
  .then((res) => res.json())
  .then((queen) => {
    trendingQuery = queen.data;
    console.log(trendingQuery);
  })
  .then(() => populate())
  .catch((err) => console.log(err));

function populate() {
  var papa = document.getElementById("append-cards-here");
  let listOfClasses = [
    "col-12",
    "col-sm-6",
    "col-md-4",
    "col-lg-2",
    "d-flex",
    "px-1",
    "fadeIn",
  ];
  for (let i = 0; i < trendingQuery.length; i++) {
    trendingAlbums.push(trendingQuery[i].album);
  }
  for (let i = 0; i < trendingAlbums.length; i++) {
    let div = document.createElement("div");
    div.classList.add(...listOfClasses);
    div.innerHTML = `<div class="card img-fluid dynamic-render" id='${trendingAlbums[i].id}'> 
    <img src=${trendingAlbums[i].cover_medium} class="card-img-top"
    alt="..."/><div class="card-body"><p class="card-text">${trendingAlbums[i].title}</p></div></div>`;
    papa.appendChild(div);
  }
  var dynamicRender = document.querySelectorAll(".dynamic-render");

  dynamicRender.forEach((el) => el.addEventListener("click", dynamic));
}
function dynamic() {
  var savedId = this.id;
  console.log("ID of this album is: " + savedId);

  let albumInfo = trendingAlbums.find(
    (element) => element.id === parseInt(savedId)
  );
  console.log("Get album tracks from: " + albumInfo.tracklist);

  document.getElementById("main-content").innerHTML = `
  <div class="album-container">
  <div class="row">
    <div class="col-6 mt-4" id="artist-infos">
      <div class="container">
        <div class="d-flex justify-content-center">
          <img
            src="${albumInfo.cover}"
            // CHANGE TO ALBUM COVER
            alt="queenImg"
            class="img-fluid w-50"
          />
        </div>
        <div class="d-flex justify-content-center mt-2">
          <h3 class="text-center" style="max-width: 50%">
            ${albumInfo.title}
          </h3>
        </div>
        <div class="d-flex flex-column align-items-center mt-n2">
          <span class="text-muted text-center">${trendingQuery[0].artist.name}</span>
          <div class="my-5">
            <div>
              <button
                type="button"
                class="mx-2 btn btn-success"
                style="border-radius: 20px"
              >
                <span
                  class="px-5 my-2 text-center"
                  style="font-weight: 300"
                  >PLAY</span
                >
              </button>
            </div>
            <div class="text-muted mt-1 text-center">
              <span>1974 <!-- this will need to be changed if we have time -->
                </span>
            </div>
          </div>
          <div id="Options">
            <i class="far fa-heart"></i>
            <i class="fas fa-ellipsis-h text-white"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 mt-4" id="songs-container">
      <!--SONGS GO HERE-->
      <table>
      </table>
    </div>
  </div>
    </div>
  </div>
</div>`;

  let table = document.querySelector("table");
  table.innerHTML = `<tr><td>Title of song</td></tr>`; // to be changed dynamically below when I can get access

  function thisAlbum() {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${savedId}/`)
      .then((res) => res.json())

      .then((tracklist) => console.log(tracklist.tracks.data))

      // fetch(`https://api.deezer.com/album/${savedId}/tracks`, {mode: 'no-cors'})
      //   .then((res) => res.json())
      //   .then((track) => {
      //     chosenTracks = track.data;
      //     console.log(chosenTracks)
      //   })
      .then(() => console.log("hello"))
      .catch((err) => console.log(err));
  }

  thisAlbum();

  // export default savedId;
  // window.location.href = "/album-page/album-page.html";
}

window.onload = function () {
  // console.log(
  //   `
  // array length: ${queenAlbums.length}
  // array itself:
  // `
  // );

  // On the home page, there should be albums
  //   Parameter: album id

  // Endpoint : https://striveschool-api.herokuapp.com/api/deezer/album/{id}

  // Example: https://striveschool-api.herokuapp.com/api/deezer/album/75621062

  // All arrays containing cards for main-content page
  let cards = [
    {
      img: "./images/karaoke-pic.jpg",
      title: "Italian Karaoke",
    },
    {
      img: "./images/liricisti.jpg",
      title: "Lyricists",
    },
    {
      img: "./images/italia.jpg",
      title: "Italy's Frequent Rotation",
    },
    {
      img: "./images/00s.jpg",
      title: "00s Italy",
    },
    {
      img: "./images/aperetivo.jpg",
      title: "Cocktail Hour",
    },
    {
      img: "./images/90s.jpg",
      title: "I Love My '90s Hip-Hop",
    },
  ];

  // second cards

  let cardsTwo = [
    {
      img: "./images/top50it.jpg",
      title: "Top 50 - Italy",
    },
    {
      img: "./images/liricisti.jpg",
      title: "Top 50 - Global",
    },
    {
      img: "./images/italia.jpg",
      title: "Viral 50 - Global",
    },
    {
      img: "./images/viral50.jpg",
      title: "Viral 50 - Italy",
    },
  ];
  // cards Trending
  let cardsTrending = [
    {
      img: "./images/love.jpg",
      title: "Top 50 - Italy",
    },
    {
      img: "./images/dolla.jpg",
      title: "Top 50 - Global",
    },
    {
      img: "./images/nobody.jpg",
      title: "Viral 50 - Global",
    },
    {
      img: "./images/bad.jpg",
      title: "Viral 50 - Italy",
    },
  ];
  // cards Podcast
  let cardsPodcast = [
    {
      img: "./images/joe.jpg",
      title: "The Joe Rogan Experi...",
    },
    {
      img: "./images/vibrators.jpg",
      title: "Values and Vibrators",
    },
    {
      img: "./images/onion.jpg",
      title: "The Friendship Onion",
    },
    {
      img: "./images/hard.jpg",
      title: "We Can DO Hard Things",
    },
  ];
  // cards Moods & genres

  let cardsMoods = [
    {
      img: "./images/tens.jpg",
      title: "Easy 10s",
    },
    {
      img: "./images/easy00.jpg",
      title: "Easy 00s",
    },
    {
      img: "./images/perfect.jpg",
      title: "A Perfect Day",
    },
    {
      img: "./images/pop.jpg",
      title: "Happy Pop Hits",
    },
  ];

  // cards New releases

  let cardsNew = [
    {
      img: "./images/build.jpg",
      title: "Build a Problem",
    },
    {
      img: "./images/higher.jpg",
      title: "Higher Power",
    },
    {
      img: "./images/forever.jpg",
      title: "Forever",
    },
    {
      img: "./images/misadventure.jpg",
      title: "Life by Misadventure",
    },
  ];
  // cards discover

  let cardsDiscover = [
    {
      img: "./images/lost.jpg",
      title: "Lost in the Woods",
    },
    {
      img: "./images/four.jpg",
      title: "4AM - Chill Out",
    },
    {
      img: "./images/wind.jpg",
      title: "The Wind Down",
    },
    {
      img: "./images/sleep.jpg",
      title: "Sleep",
    },
  ];

  // append throwbackThursday Cards

  // append Classifichie album covers
  let mamma = document.getElementById("append-mamma-here");
  let listOfMammaClasses = [
    "col-12",
    "col-sm-6",
    "col-md-4",
    "col-lg-2",
    "d-flex",
    "px-1",
  ];
  for (let i = 0; i < cardsTwo.length; i++) {
    let div = document.createElement("div");
    div.classList.add(...listOfMammaClasses);
    div.innerHTML = `<div class="card img-fluid"><img src=${cardsTwo[i].img} class="card-img-top"
  alt="..."/><div class="card-body"><p class="card-text">${cardsTwo[i].title}</p></div></div>`;
    mamma.appendChild(div);
  }
  document.getElementById("trending-btn").classList.add("main-active");

  // append trending album covers onclick
  document.getElementById("trending-btn").onclick = function () {
    papa.innerHTML = "";
    document.querySelector(".main-content-header h1").innerHTML = "Trending";
    for (let i = 0; i < cardsTrending.length; i++) {
      let div = document.createElement("div");
      div.classList.add(...listOfClasses);
      div.innerHTML = `<div class="card img-fluid"><img src=${cardsTrending[i].img}
    class="card-img-top" alt="..."/><div class="card-body">
    <p class="card-text">${cardsTrending[i].title}</p></div></div>`;
      papa.appendChild(div);
    }
    document.getElementById("trending-btn").classList.add("main-active");
    document.getElementById("podcast-btn").classList.remove("main-active");
    document.getElementById("moods-btn").classList.remove("main-active");
    document.getElementById("new-btn").classList.remove("main-active");
    document.getElementById("discover-btn").classList.remove("main-active");
  };
  // append Podcast album covers onclick
  document.getElementById("podcast-btn").onclick = function () {
    papa.innerHTML = "";
    document.querySelector(".main-content-header h1").innerHTML = "Podcast";
    for (let i = 0; i < cardsPodcast.length; i++) {
      let div = document.createElement("div");
      div.classList.add(...listOfClasses);
      div.innerHTML = `<div class="card img-fluid"><img src=${cardsPodcast[i].img}
    class="card-img-top" alt="..."/><div class="card-body">
    <p class="card-text">${cardsPodcast[i].title}</p></div></div>`;
      papa.appendChild(div);
    }
    document.getElementById("trending-btn").classList.remove("main-active");
    document.getElementById("podcast-btn").classList.add("main-active");
    document.getElementById("moods-btn").classList.remove("main-active");
    document.getElementById("new-btn").classList.remove("main-active");
    document.getElementById("discover-btn").classList.remove("main-active");
  };

  // append Moods & Genres album covers onclick
  document.getElementById("moods-btn").onclick = function () {
    papa.innerHTML = "";
    document.querySelector(".main-content-header h1").innerHTML =
      "Moods & Genres";
    for (let i = 0; i < cardsMoods.length; i++) {
      let div = document.createElement("div");
      div.classList.add(...listOfClasses);
      div.innerHTML = `<div class="card img-fluid"><img src=${cardsMoods[i].img}
    class="card-img-top" alt="..."/><div class="card-body">
    <p class="card-text">${cardsMoods[i].title}</p></div></div>`;
      papa.appendChild(div);
    }
    document.getElementById("trending-btn").classList.remove("main-active");
    document.getElementById("podcast-btn").classList.remove("main-active");
    document.getElementById("moods-btn").classList.add("main-active");
    document.getElementById("new-btn").classList.remove("main-active");
    document.getElementById("discover-btn").classList.remove("main-active");
  };

  // append new-releses album covers onclick
  document.getElementById("new-btn").onclick = function () {
    papa.innerHTML = "";
    document.querySelector(".main-content-header h1").innerHTML =
      "New Releases";
    for (let i = 0; i < cardsNew.length; i++) {
      let div = document.createElement("div");
      div.classList.add(...listOfClasses);
      div.innerHTML = `<div class="card img-fluid"><img src=${cardsNew[i].img}
    class="card-img-top" alt="..."/><div class="card-body">
    <p class="card-text">${cardsNew[i].title}</p></div></div>`;
      papa.appendChild(div);
    }
    document.getElementById("trending-btn").classList.remove("main-active");
    document.getElementById("podcast-btn").classList.remove("main-active");
    document.getElementById("moods-btn").classList.remove("main-active");
    document.getElementById("new-btn").classList.add("main-active");
    document.getElementById("discover-btn").classList.remove("main-active");
  };
  // append discover album covers onclick
  document.getElementById("discover-btn").onclick = function () {
    papa.innerHTML = "";
    document.querySelector(".main-content-header h1").innerHTML = "Discover";
    for (let i = 0; i < cardsDiscover.length; i++) {
      let div = document.createElement("div");
      div.classList.add(...listOfClasses);
      div.innerHTML = `<div class="card img-fluid"><img src=${cardsDiscover[i].img}
    class="card-img-top" alt="..."/><div class="card-body">
    <p class="card-text">${cardsDiscover[i].title}</p></div></div>`;
      papa.appendChild(div);
    }
    document.getElementById("trending-btn").classList.remove("main-active");
    document.getElementById("podcast-btn").classList.remove("main-active");
    document.getElementById("moods-btn").classList.remove("main-active");
    document.getElementById("new-btn").classList.remove("main-active");
    document.getElementById("discover-btn").classList.add("main-active");
  };

  // let hover = document.querySelectorAll("img.icon")
  // if (document.querySelectorAll(".list-group-item>span:hover")){
  //   for(let i = 0; i < hover.length; i++){
  //     hover[i].classList.add("img.icon:hover")
  //   }
  // }
};

/* below here adding a function for main content links to change display according to the link name*/

// let podcast = document.getElementById("podcast")

// podcast.onclick = function(event){
//   let allRefs = document.getElementsByClassName("main-content-trending, main-content-moods, main-content-new-releases, main-content-discover ")
//   for(let classes of allRefs)(
//     classes += allRefs.classList.add("cards-changer")
//   )
// }
