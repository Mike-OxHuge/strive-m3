// I couldn't get an array of 9 pictures from those dodgy API that you provided to us.

primaryArray = [];
secondaryArray = [];

fetch("https://picsum.photos/v2/list?page=1&limit=9", {
  method: "GET",
})
  .then((response) => response.json())
  .then((primaryImages) => {
    for (let i = 0; i < primaryImages.length; i++) {
      primaryArray.push(primaryImages[i]);
    }
  })
  .catch((err) => console.log(err));

fetch("https://picsum.photos/v2/list?page=2&limit=9", {
  method: "GET",
})
  .then((response) => response.json())
  .then((secondaryImages) => {
    for (let i = 0; i < secondaryImages.length; i++) {
      secondaryArray.push(secondaryImages[i]);
    }
  })
  .catch((err) => console.log(err));

const primaryImages = document.getElementById("primary-images");
const secondaryImages = document.getElementById("secondary-images");

const svg = document.querySelectorAll(".card svg:first-of-type");
const card = document.querySelectorAll(".card");

primaryImages.onclick = function () {
  let img = document.querySelectorAll(".img-fluid");

  if (img.length > 8) {
    for (let i = 0; i < img.length; i++) {
      img[i].remove();
    }
  }

  for (let i = 0; i < svg.length; i++) {
    svg[i].remove();
    let img = document.createElement("img");
    img.src = primaryArray[i].download_url;
    img.classList.add("img-fluid", "card-img-top");
    card[i].prepend(img);
    document.querySelectorAll("small.text-muted")[i].innerText =
      primaryArray[i].id;
  }
};

secondaryImages.onclick = function () {
  let img = document.querySelectorAll(".img-fluid");

  if (img.length > 8) {
    for (let i = 0; i < img.length; i++) {
      img[i].remove();
    }
  }

  for (let i = 0; i < svg.length; i++) {
    svg[i].remove();
    let img = document.createElement("img");
    img.src = secondaryArray[i].download_url;
    img.classList.add("img-fluid", "card-img-top");
    card[i].prepend(img);
    document.querySelectorAll("small.text-muted")[i].innerText =
      secondaryArray[i].id;
  }
};
