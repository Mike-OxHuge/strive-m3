// const apiKey =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDI5OWNlYWY0ODAwMTVjOTE4NzUiLCJpYXQiOjE2MjIwMzMwNDksImV4cCI6MTYyMzI0MjY0OX0.m8gxvxF3V6TrOS3HOwZP08bkSPv8E1ZWPLykI1Z9xqs";

let username = "mikelitoris34@icloud.com";
let password = "bollocks69";
const row = document.getElementById("row");

window.onload = async function () {
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

  // this is the fetch what will populate main page
  if (window.location.pathname === "/catalog.html") {
    await fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.forEach((phone) => {
          let col = document.createElement("div");
          col.classList.add("col-3");
          col.innerHTML = `
<div class="card">
    <img class="card-img-top img-fluid" src="${phone.imageUrl}" 
    alt="${phone.brand} ${phone.name}">
        <div class="card-body">
            <h5 class="card-title">${phone.brand} ${phone.name}</h5>
            <p class="card-text">${phone.description}</p>
            <span class="btn btn-primary">Buy today for US$${phone.price}</span>
            <a  href='./details.html?id=${phone._id}' class="btn btn-warning">Edit the item</a>
        </div>
</div>
        `;
          row.appendChild(col);
        })
      );
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  let myObj = {
    name: document.getElementById("name").value, //REQUIRED
    description: document.getElementById("description").value, //REQUIRED
    brand: document.getElementById("brand").value, //REQUIRED
    imageUrl: document.getElementById("imageUrl").value, //REQUIRED
    price: document.getElementById("price").value, //REQUIRED
  };

  await fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(myObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  })
    .then(
      document
        .querySelectorAll("form div > input")
        .forEach((el) => (el.value = ""))
    )
    .then(alert("Item has been added!"));
};
