console.log("test-mykola " + "200");
window.onload = function () {
  const btn = document.querySelectorAll(".btn-group button:last-of-type");
  for (let i = 0; i < btn.length; i++) {
    btn[i].innerText = "жопа";
  }
  console.log(btn);
};
