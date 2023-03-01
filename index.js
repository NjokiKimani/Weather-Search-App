function makeTemperatureChanges(response) {
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
  windElement.innerHTML = Math.round(response.data.wind.speed) + " km/h";
  let dateElement = document.querySelector(".date");
  dateElement.innerHTML = formatDay(response.data.dt * 1000);
     let timeElement = document.querySelector(".time");
     timeElement.innerHTML = formatTime(response.data.dt * 1000);
     let sunriseElement = document.querySelector(".sunriseValue");
     sunriseElement.innerHTML = formatSunrise(response.data.sys.sunrise*1000);
      let sunsetElement = document.querySelector(".sunsetValue");
      sunsetElement.innerHTML = formatSunset(
        response.data.sys.sunset * 1000
      );
}

function formatDay(datestamp) {
  let date = new Date(datestamp);
  let today = date.getDate();
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  return `${day}, ${month} ${today}`;
}

function formatTime(timeStamp){
  let hour = new Date(timeStamp);
  let hours = hour.getHours();
  let minutes = hour.getMinutes();
  return `${hours}:${minutes}`;
  }

  
function formatSunrise(timeStamp) {
  let hour = new Date(timeStamp);
  let hours = hour.getHours();
  let minutes = hour.getMinutes();
  return `${hours}:${minutes}`;
}

function formatSunset(timeStamp) {
  let hour = new Date(timeStamp);
  let hours = hour.getHours();
  let minutes = hour.getMinutes();
  return `${hours}:${minutes}`;
}



let apiKey = "d1bfa8b608cc07b251c544946b2756ed";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=d1bfa8b608cc07b251c544946b2756ed&units=imperial";

axios.get(apiUrl).then(makeTemperatureChanges);
