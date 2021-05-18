const artists = ["Eminem", "Metallica", "Behemoth"];
const eminemAlbums = [];
const metallicaAlbums = [];
const behemothAlbums = [];

window.onload = function () {
  console.log("let's begin!");
  for (let i = 0; i < artists.length; i++) {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artists[i]}`,
      // `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artists[i]}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "90e5eb88efmsh1d09dc719864c23p1ff331jsn79bff24920dc",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const band = document.getElementById(`${artists[i]}`);
        const bandName = document.createElement("h2");
        bandName.innerText = `${artists[i]}`;
        band.appendChild(bandName);
        const row = document.createElement("div");
        row.classList.add("row", "mx-2", "flex-row", "flex-nowrap");
        band.appendChild(row);
        for (let i = 0; i < data.data.length; i++) {
          let col = document.createElement("div");
          col.classList.add("col-12", "col-md-2");
          col.innerHTML = `
        <div class="card my-2">
          <img src="${data.data[i].album.cover_big}" class="card-img-top" alt="${data.data[i].album.title} album cover">
          <div class="card-body">
            <h5 class="card-title">${data.data[i].artist.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.data[i].album.title}</h6>
            <p class="card-text">${data.data[i].title}</p>
            <a href='${data.data[i].preview}' target='_blank' class="btn btn-primary">Play preview</a>
          </div>
        </div>
        `;
          row.appendChild(col);
          if (data.data[i].artist.name === "Eminem") {
            eminemAlbums.push(data.data[i].album.title);
          }
          if (data.data[i].artist.name === "Metallica") {
            metallicaAlbums.push(data.data[i].album.title);
          }
          if (data.data[i].artist.name === "Behemoth") {
            behemothAlbums.push(data.data[i].album.title);
          }
        }
      })
      .catch((err) => console.error(err));
  }
};
let isShown = false;
const showList = function () {
  document.getElementById("Eminem-albums").innerHTML = "";
  document.getElementById("Metallica-albums").innerHTML = "";
  document.getElementById("Behemoth-albums").innerHTML = "";
  if (!isShown) {
    document.getElementById("modal-fella").classList.remove("d-none");
    document.getElementById("all-or-unique").innerText = "All albums:";
    isShown = !isShown;
    for (let i = 0; i < eminemAlbums.length; i++) {
      let li = document.createElement("li");
      li.innerText = `${eminemAlbums[i]}`;
      document.getElementById("Eminem-albums").appendChild(li);
    }
    for (let i = 0; i < metallicaAlbums.length; i++) {
      let li = document.createElement("li");
      li.innerText = `${metallicaAlbums[i]}`;
      document.getElementById("Metallica-albums").appendChild(li);
    }
    for (let i = 0; i < behemothAlbums.length; i++) {
      let li = document.createElement("li");
      li.innerText = `${behemothAlbums[i]}`;
      document.getElementById("Behemoth-albums").appendChild(li);
    }
    console.log(eminemAlbums);
  }
};

const showUniqueList = function () {
  document.getElementById("Eminem-albums").innerHTML = "";
  document.getElementById("Metallica-albums").innerHTML = "";
  document.getElementById("Behemoth-albums").innerHTML = "";
  if (!isShown) {
    document.getElementById("modal-fella").classList.remove("d-none");
    document.getElementById("all-or-unique").innerText = "Unique albums:";
    isShown = !isShown;
  }
};

const closeModal = function () {
  if (isShown) {
    document.getElementById("modal-fella").classList.add("d-none");
    document.getElementById("all-or-unique").innerText = "";
    // document.getElementById("lists").innerHTML = "";
    isShown = !isShown;
  }
};
