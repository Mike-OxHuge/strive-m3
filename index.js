// Ex1) Get and display, using an asynchronous pattern,
// the users from: https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users").then((resp)=> resp.json()).then((data) =>console.log(data))
