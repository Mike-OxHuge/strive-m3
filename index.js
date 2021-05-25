// Ex1) Get and display, using an asynchronous pattern,
// the users from: https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((data) => console.log(data));

// Ex2) Create a dropdown (<select>) that allows the user to select between name,
// username and email.
// Create then a filter. When the user types in something, you should filter
// the user based on the input and on the value of the select.
// Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain
console.log(document.getElementById("inputGroupSelect01"));
