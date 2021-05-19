
window.onload = function () {
  const btn = document.querySelectorAll(".btn-group button:last-of-type");
  const svg = document.querySelectorAll(".album")
  for (let i = 0; i < btn.length; i++) {
    btn[i].innerText = " "  
    btn[i].innerText = "Hide";
    btn[i].addEventListener("click", () => {
            album[i].parentNode.removeChild("svg")
    })
  }
//   console.log(btn);
};

