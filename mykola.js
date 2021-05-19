window.onload = function () {
  const svg = document.querySelectorAll(".card svg:first-of-type");
  const img = document.querySelectorAll(".card img");
  const small = document.getElementsByTagName("small");

  const btn = document.querySelectorAll(".btn-group button:last-of-type");

  for (let i = 0; i < btn.length; i++) {
    btn[i].innerText = " ";
    btn[i].innerText = "Hide";
    btn[i].addEventListener("click", () => {
      svg[i].remove();
      const pics = document.querySelectorAll(".img-fluid");
      if (pics.length > 0) {
        pics[i].remove();
      }
    });
  }
};
//   console.log(btn);

// for (let i = 0; i < pics.length; i++) {
//   btn[i].addEventListener("click", () => {

//
//   });
// }
