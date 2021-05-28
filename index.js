let username = "mikelitoris34@icloud.com";
let password = "bollocks69";

window.onload = async function () {
  document
    .querySelectorAll(".carousel-item .row")
    .forEach((row) => row.classList.add("justify-content-center"));
  const keyRequest = await fetch(
    `https://striveschool-api.herokuapp.com/api/account/login?username=${username}&password=${password}`,
    {
      method: "POST",
    }
  );
  const key = await keyRequest.json();
  const pureKey = await key.access_token;
  apiKey = "Bearer " + pureKey;
  localStorage.setItem("apiKey", apiKey);

  const listOfGenres = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/",
    {
      headers: {
        Authorization: apiKey,
      },
    }
  )
    .then((res) => res.json())
    .then((genres) => {
      for (let i = 0; i < genres.length - 3; i++) {
        document.getElementById("genres-dropdown").innerHTML += `
        <a class="dropdown-item" href="./index.html?genre=${genres[i]}">
        <span style='text-transform: capitalize'>${genres[i]}</span>
        </a>`;
      }
    });
  populatingCarousel("trending");
  populatingCarousel("watch it again");
  populatingCarousel("new releases");
  selectedGenre();
};

const selectedGenre = async () => {
  let params = new URL(document.location).searchParams;
  let genre = params.get("genre");
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/${genre}`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  );
  const selectedGenre = await response.json();
  let row = document.createElement("div");
  row.classList.add("row", "container", "justify-content-center");
  row.style.maxWidth = "100vw";
  let mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";
  mainContainer.appendChild(row);

  selectedGenre.forEach((movie) => {
    let col = document.createElement("div");
    col.classList.add("col-3", "mx-auto");
    col.innerHTML = `
    <div class="card my-3">
      <img class="card-img-top img-fluid" src=${movie.imageUrl} alt="Card image cap"
      style='max-height: 20vh'>
        <div class="card-body">
          <h5 class="card-title">${movie.name}</h5>
          <p class="card-text">${movie.description}</p>
          <a href="#" class="btn btn-primary">${movie.category}</a>
        </div>
    </div>
    `;
    row.appendChild(col);
  });
};

const populatingCarousel = async (genre) => {
  const listOfGenres = await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/${genre}`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      genre = genre.replaceAll(" ", "-");
      data.slice(0, Math.ceil(data.length / 4)).forEach((movie) => {
        document.getElementById(`${genre}1`).innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-1">
                <img
                  src=${movie.imageUrl}
                  class="w-100 img-fluid"
                  alt=${movie.name}
                />
              </div>
      `;
      });

      data
        .slice(Math.ceil(data.length / 4), Math.ceil(data.length / 2))
        .forEach((movie) => {
          document.getElementById(`${genre}2`).innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-1">
                <img
                  src=${movie.imageUrl}
                  class="w-100 img-fluid"
                  alt=${movie.name}
                />
              </div>
      `;
        });

      data
        .slice(Math.ceil(data.length / 2), Math.ceil((data.length / 4) * 3))
        .forEach((movie) => {
          document.getElementById(`${genre}3`).innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-1">
                  <img
                    src=${movie.imageUrl}
                    class="w-100 img-fluid"
                    alt=${movie.name}
                  />
                </div>
        `;
        });

      data.slice(Math.ceil((data.length / 4) * 3), 9999).forEach((movie) => {
        document.getElementById(`${genre}4`).innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-1">
                  <img
                    src=${movie.imageUrl}
                    class="w-100 img-fluid"
                    alt=${movie.name}
                  />
                </div>
        `;
      });
    });
};
