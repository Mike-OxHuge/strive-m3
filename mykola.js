
const primaryArray = []

window.onload = function () {
  const btn = document.querySelectorAll(".btn-group button:last-of-type");
  const svg= document.querySelectorAll(".card svg:first-of-type")
  const small = document.getElementsByTagName("small")

  for (let i = 0; i < btn.length; i++) {
    btn[i].innerText = " "  
    btn[i].innerText = "Hide";
    btn[i].addEventListener("click", () => {
            svg[i].classList.add("d-none")
    })
   
 }
}
//   console.log(btn);

