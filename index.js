// Ex1) Get and display, using an asynchronous pattern,
// the users from: https://jsonplaceholder.typicode.com/users
window.onload = function () {
  //
};
let users = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((data) => {
    users = data;
    populate(users);
  });

// Ex2) Create a dropdown (<select>) that allows the user to select between name,
// username and email.
// Create then a filter. When the user types in something, you should filter
// the user based on the input and on the value of the select.
// Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain
let options = document.querySelectorAll("#select_filter option");
// let userInput = document.getElementById("userInput").value;
let userList = document.getElementById("users-list");

function populate(users) {
  for (let i = 0; i < users.length; i++) {
    let li = document.createElement("li");
    li.innerText = `Name: ${users[i].name}, Username: ${users[i].username}, email: ${users[i].email}`;
    userList.appendChild(li);
  }
  selector(users);
}
function selector(users) {
  options.forEach((option) =>
    option.addEventListener("click", (option) => {
      let userInput = document.getElementById("userInput").value;
      let filtredArray = users.filter((user) =>
        String(user[option.target.id])
          .toLowerCase()
          .includes(String(userInput).toLowerCase())
      );
      userList.innerHTML = "";
      for (let i = 0; i < filtredArray.length; i++) {
        let li = document.createElement("li");
        li.innerText = filtredArray[i][option.target.id];
        userList.appendChild(li);
      }
      //   console.log(filtredArray);
      //   console.log(users);
      //   console.log("user input", userInput);
      //   console.log(option.target.id);
    })
  );
}
// Ex3) Create a function that, from the list of users, extracts only the names
let button = document.getElementById("button");
button.onclick = function () {
  userList.innerHTML = "";
  users.map((user) => (userList.innerHTML += `<li>${user.name}</li>`));
};

// Ex4) Create a function that, from the list of users,
// creates an array of addresses as string and not as an object. Like:
// {
// "street": "Victor Plains",
// "suite": "Suite 879",
// "city": "Wisokyburgh",
// "zipcode": "90566-7771",
// "geo": {
//   "lat": "-43.9509",
//   "lng": "-34.4618"
// }
// Should become Victor Plains, Suite 879, Wisokyburgh (90566-7771)
function addresses() {
  userList.innerHTML = "";
  let arrayOfAddresses = [];
  users.forEach((user) => arrayOfAddresses.push(user.address));
  arrayOfAddresses.map(
    (adr) =>
      (userList.innerHTML += `<li>${adr.street}, ${adr.suite}, ${adr.city}, ${adr.zipcode},
    ${adr.geo.lat}/${adr.geo.lng} </li>`)
  );
}
// Ex5) Add a button that sorts the list by name ascending / descending (ONE button)
let sortingButton = document.getElementById("sorting-button");
let isSorted = false;
sortingButton.onclick = function sort() {
  let sign = document.createElement("h2");
  userList.innerHTML = "";
  if (isSorted) {
    users.sort((a, b) => a - b);
    users.map((user) => (userList.innerHTML += `<li>${user.name}</li>`));
    isSorted = !isSorted;
    sortingButton.innerText = "Sort A-Z";
    sign.innerText = "Currently sorted Counter-Alphabetically";
  } else {
    users.sort((a, b) => b - a);
    users.map((user) => (userList.innerHTML += `<li>${user.name}</li>`));
    isSorted = !isSorted;
    sortingButton.innerText = "Sort Z-A";
    sign.innerText = "Currently sorted Alphabetically";
  }
  userList.prepend(sign);
};
