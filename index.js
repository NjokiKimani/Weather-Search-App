function makeChanges(response){
    console.log(response.data);
    let temperatureElement = document.querySelector(".temperature");
   temperatureElement.innerHTML = Math.round(response.data.main.temp) + "°";
   let descriptionElement = document.querySelector(".description");
   descriptionElement.innerHTML = response.data.weather[0].description;
   let maxTemperatureElement = document.querySelector(".maxTemperature");
   maxTemperatureElement.innerHTML +=
     Math.round(response.data.main.temp_max) + "°";
let minTemperatureElement = document.querySelector(".minTemperature");
   minTemperatureElement.innerHTML +=
     Math.round(response.data.main.temp_min) + "°";
     let humidityElement = document.querySelector(".humidityValue");
     humidityElement.innerHTML = response.data.main.humidity;
let feelElement = document.querySelector(".realFeelValue");
feelElement.innerHTML = Math.round(response.data.main.feels_like) + "°";
let windElement = document.querySelector(".windValue");
windElement.innerHTML = Math.round(response.data.wind.speed) + " Km/H";    }




let apiKey = "d1bfa8b608cc07b251c544946b2756ed";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=d1bfa8b608cc07b251c544946b2756ed&units=imperial";

  axios.get(apiUrl).then(makeChanges);
  let dateElement