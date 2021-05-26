let playfield = document.getElementById("play-field");
let launcher = document.createElement("button");
window.onload = function () {
  launcher.innerText = "Start the game!";
  playfield.appendChild(launcher);
  launcher.addEventListener("click", gameStart);
};
const gameStart = function () {
  playfield.innerHTML = "";
  playfield.innerHTML = `
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Start of range:</span>
  </div>
  <input type="number" class="form-control" value="0" id='startingPoint' required>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">End of range:</span>
  </div>
  <input type="number" class="form-control" value="69" id='endingPoint' required>
</div>

<button class="btn btn-primary" type="button" id='gameBegin'>Start the game</button>
  `;

  gameBegin.addEventListener("click", (a, b) => {
    a = Number(document.getElementById("startingPoint").value);
    b = Number(document.getElementById("endingPoint").value);
    playfield.innerHTML = "";
    playfield.innerHTML = `
    <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Guess a number:</span>
        </div>
      <input type="number" class="form-control" placeholder="0" id='guesser' required>
    </div>
    <button class="btn btn-primary" type="button" id='checker'>Check the number</button>
    `;
    const randomNumber = Math.ceil(Math.random(a) * b);
    document.getElementById("checker").addEventListener("click", (x, y, z) => {
      let guess = document.getElementById("guesser");
      let attempt = Number(guess.value);
      x = a;
      y = b;
      z = randomNumber;
      if (attempt > randomNumber) {
        alert(`Your number ${attempt} is greater than random number`);
      } else if (attempt === randomNumber) {
        playfield.innerHTML = `
        <div class='container' style='max-width: 100%'>
          <h1>CONGRATS! YOU WON!</h1>
          <h2>Claim your prize: >>> <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=43s'>here</a> <<<</h2>
        </div>
        <button class="btn btn-warning mt-5" type="button" id='restart'>Restart the game</button>
        `;
        document
          .getElementById("restart")
          .addEventListener("click", restartTheGame);
      } else {
        alert(`Your number ${attempt} is lower than random number`);
      }
    });
  });
};
function restartTheGame() {
  location.reload();
}
