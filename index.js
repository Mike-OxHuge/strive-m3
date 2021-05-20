let allBooks = [];
const list = document.querySelector("#list-container ul:first-of-type");
list.classList.add("row", "container");
//  0) Get all the products from the API using a fetch
window.onload = function () {
  console.log("this is a disaster");
};
fetch("https://striveschool-api.herokuapp.com/books", {
  method: "GET",
})
  .then((res) => res.json())
  //   1) Display the list of items available on the page using template
  //   literals `` and .forEach
  .then((books) => {
    allBooks = books;
    books.forEach((book) => {
      let col = document.createElement("div");
      col.classList.add("col-12", "col-md-3");
      col.innerHTML = `
         <div class="card">
            <img class="card-img-top img-fluid" src="${book.img}" alt="${book.title} cover">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.category}</h6>
                <div class='d-flex' style='justify-content: space-around'>
                <p class="card-text">Book ID: ${book.asin}</p>
                <p class="card-text">Price: US$ ${book.price}</p>
                </div>
                
                <span class="btn btn-primary">Add to cart</span>
            </div>
        </div>
      `;
      //   2) Add an "Add to Cart" button
      list.appendChild(col);
    });
    var buttons = document.querySelectorAll(".btn-primary");
    buttons.forEach((button) => button.addEventListener("click", addToCart));
  });
//  3) When the button is pressed, change the style of the item
// and add its data to another list.
// That's going to be the Cart's list.
// Display it somewhere.
const cart = [];
const addToCart = function () {
  this.innerHTML = this.innerHTML.replace("Add to cart", "In your cart!");
  this.parentElement.parentElement.classList.add("selected");
  let bookTitle = `${this.parentElement.children[0].innerText}`;
  cart.push(bookTitle);
  document.getElementById(
    "dropdownMenuButton"
  ).innerText = `Items in your cart: ${cart.length}`;
  let itemList = document.getElementById("dropdown-menu");
  let bookToAdd = document.createElement("a");
  bookToAdd.innerHTML = `<span class="dropdown-item" onclick='removeFromCart()'>${bookTitle}</span>`;
  itemList.prepend(bookToAdd);
};
// 4) Allow the user to delete items from the cart's list
const removeFromCart = function () {
  let itemsToRemove = document.querySelectorAll("span.dropdown-item");
  itemsToRemove.forEach((item) => item.addEventListener("click", eraser));
  document.getElementById(
    "dropdownMenuButton"
  ).innerText = `Items in your cart: ${cart.length}`;
};
const eraser = function () {
  this.remove();
  let cartFoo = cart;
  cartFoo.pop();
  document.getElementById(
    "dropdownMenuButton"
  ).innerText = `Items in your cart: ${cartFoo.length}`;
};
