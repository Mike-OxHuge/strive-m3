window.onload = function () {
  // later populate from an array
  let appendSongs = document.getElementById("songs-container");
  for (let i = 0; i < 15; i++) {
    let song = document.createElement("div");
    song.innerHTML = `
    <div class='d-flex' style='justify-content: space-between;'>
        <div>
            <p><i class="fas fa-music"></i>trackname</p>
        </div>
        <div>
        <p>duration</p>
        </div>
    </div>
    `;
    appendSongs.appendChild(song);
  }
};
