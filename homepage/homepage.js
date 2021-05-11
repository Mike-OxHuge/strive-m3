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
      img: "./images/karaoke-pic.jpg",
      title: "Italian Karaoke",
    },
    {
      img: "./images/karaoke-pic.jpg",
      title: "Italian Karaoke",
    },
    {
      img: "./images/karaoke-pic.jpg",
      title: "Italian Karaoke",
    },
    {
      img: "./images/karaoke-pic.jpg",
      title: "Italian Karaoke",
    },
    // or modify existsing objects to display different things.
  ];
  let papa = document.getElementById("append-cards-here");
  let listOfClasses = ["col-12", "col-sm-6", "col-md-4", "col-lg-2", "d-flex"];
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
};
