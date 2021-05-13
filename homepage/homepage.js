window.onload = function () {
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
  let papa = document.getElementById("append-cards-here");
  let listOfClasses = [
    "col-12",
    "col-sm-6",
    "col-md-4",
    "col-lg-2",
    "d-flex",
    "px-1",
  ];
  for (let i = 0; i < cards.length; i++) {
    let div = document.createElement("div");
    div.classList.add(...listOfClasses);
    div.innerHTML = `<div class="card img-fluid"><img src=${cards[i].img} class="card-img-top"
    alt="..."/><div class="card-body"><p class="card-text">${cards[i].title}</p></div></div>`;
    papa.appendChild(div);
  }

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
};

/* below here adding a function for main content links to change display according to the link name*/

// let podcast = document.getElementById("podcast")

// podcast.onclick = function(event){
//   let allRefs = document.getElementsByClassName("main-content-trending, main-content-moods, main-content-new-releases, main-content-discover ")
//   for(let classes of allRefs)(
//     classes += allRefs.classList.add("cards-changer")
//   )
// }
