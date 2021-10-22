const apiURL = "https://swapi.dev/api/planets/";
const planetContainer = document.querySelector(".container");

const planets = [];

axios
  .get(`${apiURL}/7`)
  .then((result) => {
    console.log(result);
    console.log(result.data);
    planets.push(result.data);
  })
  .then((result) => {
    const content = planets.forEach((element) => {
      const singlePlanetContainer = document.createElement("div");
      singlePlanetContainer.classList.add("card");

      const title = document.createElement("h1");
      title.classList.add("title");
      title.innerText = `${element.name}`;

      const climate = document.createElement("h2");
      climate.classList.add("climate");
      climate.innerText = `Climate: ${element.climate}`;

      const terrain = document.createElement("p");
      terrain.classList.add("terrain");
      terrain.innerText = `Terrain: ${element.terrain}`;

      const films = document.createElement("p");
      films.classList.add("films");
      films.innerText = element.films;

      const population = document.createElement("p");
      population.classList.add("population");
      population.innerText = `Population: ${element.population}`;

      singlePlanetContainer.appendChild(title);
      singlePlanetContainer.appendChild(climate);
      singlePlanetContainer.appendChild(terrain);
      singlePlanetContainer.appendChild(films);
      singlePlanetContainer.appendChild(population);
      planetContainer.appendChild(singlePlanetContainer);
    });
  })
  .catch((error) => {
    console.log(error);
  });
console.log(planets);
