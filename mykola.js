


window.onload = function () {
 
  const btn = document.querySelectorAll(".btn-group button:last-of-type");
  const svg= document.querySelectorAll(".card svg:first-of-type")
  const img = document.querySelectorAll(".card img")
  const small = document.getElementsByTagName("small")

  for (let i = 0; i < btn.length; i++) {
    btn[i].innerText = " "  
    btn[i].innerText = "Hide";
    btn[i].addEventListener("click", () => {

            svg[i].remove()
    })
   
 }
}
//   console.log(btn);

