// here's the functions I used to automate process of editing/populating with dummy data.

const populating = async () => {
  for (let i = 0; i < 20; i++) {
    let myObj = {
      name: `A random new releases movie ${i}`,
      description: `A description of the random new releases movie ${i}`,
      category: "new releases",
      imageUrl: `https://picsum.photos/400/400?random=${i + 60}`,
    };
    await fetch("https://striveschool-api.herokuapp.com/api/movies/", {
      method: "POST",
      body: JSON.stringify(myObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    });
    console.log(`item #${i}has been added`);
  }
};

const updating = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/trending",
    {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("apiKey"),
      },
    }
  );
  const movies = await response.json();
  for (let i = 0; i < movies.length; i++) {
    let myObj = {
      imageUrl: `https://picsum.photos/400/400?random=${100 + i}`,
    };
    await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/${movies[i]._id}`,
      {
        method: "PUT",
        body: JSON.stringify(myObj),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("apiKey"),
        },
      }
    );
    console.log(`item with ID ${movies[i]._id} has been updated`);
  }
};
