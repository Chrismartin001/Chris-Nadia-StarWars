const apiURL = "https://swapi.dev/api/planets/";
const planetContainer = document.querySelector(".container");

const planets = [];

axios
  .get(`${apiURL}/4`)
  .then((result) => {
    console.log(result.data);
    planets.push(result.data);
  })
  .then((result) => {
    const content = planets.forEach((element) => {
      const singlePlanetContainer = document.createElement("div");
      singlePlanetContainer.classList.add("card");

      const title = document.createElement("h1");
      title.classList.add("card__title");
      title.innerText = `${element.name}`;

      const climate = document.createElement("p");
      climate.classList.add("card__climate");
      climate.innerText = `Climate: ${element.climate}`;

      const terrain = document.createElement("p");
      terrain.classList.add("card__terrain");
      terrain.innerText = `Terrain: ${element.terrain}`;

      const population = document.createElement("p");
      population.classList.add("card__population");
      population.innerText = `Population: ${element.population}`;

      singlePlanetContainer.appendChild(title);
      singlePlanetContainer.appendChild(climate);
      singlePlanetContainer.appendChild(terrain);
      singlePlanetContainer.appendChild(population);
      planetContainer.appendChild(singlePlanetContainer);
    });
  })
  .catch((error) => {
    console.log(error);
  });
