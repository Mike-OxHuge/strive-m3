// Ex1) Get and display, using an asynchronous pattern,
// the users from: https://jsonplaceholder.typicode.com/users
window.onload = function () {
  //
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((data) => {
    var users = data;
    populate(users);
  });

// Ex2) Create a dropdown (<select>) that allows the user to select between name,
// username and email.
// Create then a filter. When the user types in something, you should filter
// the user based on the input and on the value of the select.
// Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain
let options = document.querySelectorAll("#inputGroupSelect01 option");
let userInput = document.getElementById("userInput").value;
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
      let filtredArray = users.filter(
        (user) =>
          String(user.name).toLowerCase() === String(userInput).toLowerCase()
      );
      userList.innerHTML = "";
      let li = document.createElement("li");
      li.innerText = filtredArray[0].name;
      userList.appendChild(li);
      console.log(filtredArray);
      console.log(users);
      console.log("user input", userInput);
      console.log(option.target.id);
    })
  );
}
