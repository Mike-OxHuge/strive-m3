window.onload = function () {
  let albums = [
    {
      pic: "./images/queen-album-cover-1.jpg",
      title: "Queen II",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-2.jpg",
      title: "Bohemian Rhapsody",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-3.jpg",
      title: "Hot Space",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-4.jpg",
      title: "Another Bohemian Rhapsody",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-5.jpg",
      title: "The Miracle",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-6.jpg",
      title: "News of the world",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-7.jpg",
      title: "Queen Works",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-8.jpg",
      title: "Jazz",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-9.jpg",
      title: "A kind of magic",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-10.jpg",
      title: "Killer queen",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-11.jpg",
      title: "Dunno what album is it",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-12.jpg",
      title: "Greatest hits",
      subtitle: "Queen",
    },
  ];
  console.log(albums);
  let appendAlbums = document.getElementById("append-albums");
  for (let i = 0; i < albums.length; i++) {
    let div = document.createElement("div");
    div.classList.add("col-2");
    div.innerHTML = `
    <img
              src="./images/queen-album-cover-${i + 1}.jpg"
              alt=""
              class="fluid w-100"
            />
            <div class="text-center mb-4" style="line-height: 0.1rem">
              <h6 class="text-white">${albums[i].title}</h6>
              <span class="text-muted" style="font-size: 0.7rem">${
                albums[i].subtitle
              }</span>
            </div>
    `;
    appendAlbums.appendChild(div);
  }
};
