window.onload = function () {
  // if you need to add extra cards, just create a new object in this array.
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
    // or modify existsing objects to display different things.
  ];
  let papa = document.getElementById("append-cards-here");
  let listOfClasses = ["col-12", "col-sm-6", "col-md-4", "col-lg-2", "d-flex", "slideInLeft"];
  for (let i = 0; i < cards.length; i++) {
    let div = document.createElement("div");
    div.classList.add(...listOfClasses);
    div.innerHTML = `
    <div class="card img-fluid">
    <img
      src=${cards[i].img}
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <p class="card-text">${cards[i].title}</p>
    </div>
  </div>
    `;
    papa.appendChild(div);
  }
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


let mamma = document.getElementById("append-mamma-here")
let listOfMammaClasses = ["col-12", "col-sm-6", "col-md-4", "col-lg-2", "d-flex", "slideInLeft"]
for (let i = 0; i < cardsTwo.length; i++) {
  let div = document.createElement("div");
  div.classList.add(...listOfMammaClasses);
  div.innerHTML = `
  <div class="card img-fluid">
  <img
    src=${cardsTwo[i].img}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <p class="card-text">${cardsTwo[i].title}</p>
  </div>
</div>
  `;
  mamma.appendChild(div);
}
}