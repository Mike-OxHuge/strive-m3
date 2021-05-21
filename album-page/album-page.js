import { savedId, trendingAlbums } from "../homepage/homepage";
console.log(savedId);
window.onload = function () {
  console.log(trendingAlbums);
  console.log(savedId);
  // later populate from an array
  let songs = [
    {
      track: `"Procession" (instrumental)`,
      duration: `1:12`,
    },
    {
      track: `"Father to Son"`,
      duration: `6:14`,
    },
    {
      track: `"White Queen (As It Began)"`,
      duration: `4:34`,
    },
    {
      track: `"Some Day One Day"`,
      duration: `4:23`,
    },
    {
      track: `"The Loser in the End"`,
      duration: `4:02`,
    },
    {
      track: `"Ogre Battle"`,
      duration: `4:10`,
    },
    {
      track: `"The Fairy Feller's Master-Stroke"`,
      duration: `2:40`,
    },
    {
      track: `"Nevermore"`,
      duration: `1:17`,
    },
    {
      track: `"The March of the Black Queen"`,
      duration: `6:33`,
    },
    {
      track: `"Funny How Love Is"`,
      duration: `2:50`,
    },
    {
      track: `"Seven Seas of Rhye"`,
      duration: `2:50`,
    },
    {
      track: `"Nevermore" (BBC session, April 1974)`,
      duration: `1:29`,
    },
    {
      track: `Ogre Battle" (1991 Bonus Remix)`,
      duration: `3:27`,
    },
    {
      track: `"Seven Seas of Rhye" (1991 Bonus Remix)`,
      duration: `6:35`,
    },
    {
      track: `"White Queen (As It Began)" (live at Hammersmith Odeon, Dec 1975)`,
      duration: `5:34`,
    },
  ];
  let appendSongs = document.getElementById("songs-container");
  for (let i = 0; i < songs.length; i++) {
    let song = document.createElement("div");
    song.innerHTML = `
    <div class='d-flex' style='justify-content: space-between;'>
        <div>
            <p><i class="fas fa-music"></i>${songs[i].track} <br/> 
            <span class='text-muted ml-5'>Queen</span>
            </p>
        </div>
        <div>
        <p>${songs[i].duration}</p>
        </div>
    </div>
    `;
    appendSongs.appendChild(song);
  }
};
