//api weather js

const API_KEY = "4a8232306dbd44878bf6c17995cde192";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((respond) => {
      return respond.json();
    })
    .then((data) => {
      //   locationElement.style.color = "black";
      locationElement.classList.add("black");
      locationElement.innerHTML = data.name;
      temperatureElement.classList.add("black");
      temperatureElement.innerHTML = `${Math.round(data.main.temp)}°C`;
      descriptionElement.classList.add("black");
      descriptionElement.innerHTML = data.weather[0].description;
    })
    .catch((error) => {
      console.log("Ralat mengambil data cuaca", error);
    });
}
